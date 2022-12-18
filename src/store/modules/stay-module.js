import { stayService } from '../../services/stay-service'
export default {
  state: {
    stays: null,
    currStay: null,
    currFilterBy: null,
    currSearchBig: false,
    currModal: false, // reservation modal (final)
    tags: ["beach", "design", "desert", "amazing-views", "countryside", "bed-breakfast", "cabins", "lake", "amazing-pools", "iconic-cities", "earth-homes", "omg"]
  },
  getters: {
    stays(state) {
      return state.stays
    },
    getCurrStay({ currStay }) {
      return currStay
    },
    currFilterBy(state) {
      return state.currFilterBy
    },
    getCurrStayAvg({ currStay }) {
      let sumRate = currStay.reviewScores.rating
      let avg = sumRate / 20
      return avg
    },
    getReviewsLength({ currStay }) {
      return currStay.reviews.length
    },
    getSearch({ currSearchBig }) {
      return currSearchBig
    },
    getModal({currModal}) {
      return currModal
    },
    getCategories({ tags }) {
      return tags
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },
    setCurrStay(state, { stay }) {
      state.currStay = stay
    },
    setFilter(state, { filterBy }) {
      state.currFilterBy = filterBy
    },
    toggleSearchBig(state) {
      state.currSearchBig = !state.currSearchBig
    },
    closeSearchBig(state) {
      state.currSearchBig = false
    },
    makeSearchSmall({currSearchBig}) {
      currSearchBig = false
    },
    closeAllBig(state) {
      state.currSearchBig = false
      state.currModal = false
    },
    toggleModal(state) {
      state.currModal = !state.currModal
    },
    resetFilter(state) {
      state.currFilterBy = null
    }
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        const stays = await stayService.query(state.currFilterBy)
        commit({ type: 'setStays', stays })
      } catch (err) {
        console.log('stayStore: Error in loadstays', err)
        throw err
      }
    },
    async getCurrStay({ commit }, { stayId }) {
      try {
        const stay = await stayService.getById(stayId)
        commit({ type: 'setCurrStay', stay })
      } catch (err) {
        console.log('stayStore: Error in getCurrStay', err)
        throw err
      }
    },
  },
}
