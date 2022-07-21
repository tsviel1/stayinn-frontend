import { stayService } from '../../services/stay-service'

export default {
  state: {
    stays: null,
    currStay: null,
  },
  getters: {
    getStays({ stays }) {
      return stays
    },
    getCurrStay({ currStay }) {
      console.log('In get currStay')
      return currStay
    },
    getCurrStayAvg({ currStay }) {
      let sumRate = currStay.reviews.reduce(
        (acc, currVal) => acc + currVal.rate,
        0
      )
      let avg = sumRate / currStay.reviews.length
      return avg
    },
    getReviewsLength({currStay}) {
      return currStay.reviews.length
    },
    
  },

  mutations: {
    setstays(state, { stays }) {
      console.log('stays mutation', stays)

      state.stays = stays
      console.log('state.stays', state.stays)
    },

    setCurrStay(state, { stay }) {
      // console.log(stay)
      state.currStay = stay
      // console.log(state.currStay)
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        const stays = await stayService.query()
        console.log('stays', stays)

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
