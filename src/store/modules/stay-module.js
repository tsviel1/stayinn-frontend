import { stayService } from '../../services/stay-service'

export default {
  state: {
    stays: null,
  },
  getters: {
    getStays({stays}) { 

      
      return stays },
  },
  mutations: {
    setstays(state, { stays }) {
      console.log('stays mutation', stays)
      
        state.stays = stays
        console.log('state.stays', state.stays)
        
        
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
  },
}
