import { stayService } from '../../services/stay-service'
export default {
  state: {
    stays: null,
    currStay: null,
    currFilterBy: null,
  },
  getters: {
    stays(state) {
      return state.stays
    },
    staysToDisplay(state) {
      var stays = state.stays
      if (state.currFilterBy?.txt) {
        const regex = new RegExp(state.currFilterBy.txt, 'i')
        stays = stays.filter((stay) => regex.test(stay.loc.city))
      }
      if (state.currFilterBy?.beds) {
        stays = stays.filter((stay) => stay.beds === state.currFilterBy.beds)
      }
      if (state.currFilterBy?.bedrooms) {
        stays = stays.filter(
          (stay) => stay.bedrooms === state.currFilterBy.bedrooms
        )
      }
      return stays
    },
    getCurrStay({ currStay }) {
      return currStay
    },
    currFilterBy(state) {
      return state.currFilterBy
    },
    getCurrStayAvg({ currStay }) {
      let sumRate = currStay.reviews.reduce(
        (acc, currVal) => acc + currVal.rate,
        0
      )
      let avg = sumRate / currStay.reviews.length
      return avg
    },
    getReviewsLength({ currStay }) {
      return currStay.reviews.length
    },
  },
  mutations: {
    setstays(state, { stays }) {
      state.stays = stays
      console.log(state.stays)
    },
    setCurrStay(state, { stay }) {
      // console.log(stay)
      state.currStay = stay
      // console.log(state.currStay)
    },
    setFilter(state, { filterBy }) {
      state.currFilterBy = filterBy
      console.log(state.currFilterBy)
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        // console.log(state.currFilterBy)
        const stays = await stayService.query(state.currFilterBy)
        commit({ type: 'setstays', stays })
      } catch (err) {
        console.log('stayStore: Error in loadstays', err)
        throw err
      }
    },
    async getCurrStay({ commit }, { stayId }) {
      try {
        const stay = await stayService.getById(stayId)
        // console.log(stay)
        commit({ type: 'setCurrStay', stay })
      } catch (err) {
        console.log('stayStore: Error in getCurrStay', err)
        throw err
      }
    },
  },
}
