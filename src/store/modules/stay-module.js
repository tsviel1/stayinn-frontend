import { stayService } from '../../services/stay-service'

export default {
  state: {
    stays: null,
  },
  getters: {
    getStays({stays}) { return stays },
  },
  mutations: {
    setstays(state, { stays }) {
        state.stays = stays
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
  },
}
