import { stayService } from '../../services/stay-service'
export default {
  state: {
    stays: null,
    currStay: null,
    currFilterBy: null,
    currSearchBig: false,
    currModal: false, // reservation modal (final)
    currModalWhoInSearch: false,
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
    getModalWhoInSearch({currModalWhoInSearch}) {
      return currModalWhoInSearch
    },
    getCategories({ tags }) {
      return tags
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
      // console.log(state.stays)
    },
    setCurrStay(state, { stay }) {
      // console.log(stay)
      state.currStay = stay
      // console.log(state.currStay)
    },
    setFilter(state, { filterBy }) {
      state.currFilterBy = filterBy
      // console.log(state.currFilterBy)
    },
    toggleSearchBig(state) {
      state.currSearchBig = !state.currSearchBig
    },
    makeSearchSmall({currSearchBig}) {
      currSearchBig = false
    },
    closeAllBig(state) {
      state.currSearchBig = false
      state.currModal = false
      state.currModalWhoInSearch = false
    },
    toggleModal(state) {
      state.currModal = !state.currModal
    },
    toggleModalWhoInSearch(state) {
      state.currModalWhoInSearch = !state.currModalWhoInSearch
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        console.log(state.currFilterBy)
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
