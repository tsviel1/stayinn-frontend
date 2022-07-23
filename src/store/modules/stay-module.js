import { stayService } from '../../services/stay-service'

export default {
  state: {
    stays: null,
    currStay: null,
    currFilterBy: null
  },
  getters: {
    staysToDisplay(state) {
      var stays = state.stays
      if (state.currFilterBy?.txt) {
        const regex = new RegExp(state.currFilterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.loc.city))
      }
      return stays
    },
    getCurrStay({ currStay }) {
      return currStay
    },
    currFilterBy(state) {
      return state.currFilterBy
    },
  },
  mutations: {
    setstays(state, { stays }) {
      state.stays = stays
    },
    setCurrStay(state, { stay }) {
      // console.log(stay)
      state.currStay = stay
      // console.log(state.currStay)
    },
    setFilter(state, { filterBy }) {
      state.currFilterBy = filterBy
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        const stays = await stayService.query()
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
