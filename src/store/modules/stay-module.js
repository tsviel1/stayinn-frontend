import { stayService } from '../../services/stay-service'

export default {
  state: {
    stays: null,
    currStay: null,
  },
  getters: {
<<<<<<< HEAD
    getStays({stays}) { return stays },
    getCurrStay({currStay}) {
      console.log('In get currStay')
      return currStay
    },
=======
    getStays({stays}) { 

      
      return stays },
>>>>>>> 6a22e2ad659ab938853adc9bd4340ecf1cacb97a
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
    async getCurrStay({commit}, {stayId}) {
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
