import { orderService } from '../../services/order-service.js'

export default {
  state: {
    oreders: null,
  },
  getters: {
    getOrders({ orders }) {
      return orders
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
    },
  },
  actions: {
    async loadOrders({ commit, state, rootState }) {
        try {
          console.log('Hi')
          console.log(rootState.userStore.loggedinUser)
          const currUser = rootState.userStore.loggedinUser
          console.log('order module', currUser)
          const orders = await orderService.query(currUser)
          commit({type: 'setOrders', orders})
        } catch (err) {
          console.log(err)
        }
      },
      async saveOrder({ commit, state, rootState }) {
        try {
        //   console.log(state.trip.chckInDate)
          const currStay = rootState.stayStore.currStay
          const user = rootState.userStore.loggedinUser
          const trip = rootState.tripStore.trip
          let order = { ...trip, stay: currStay, createdAt: Date.now(), by:  user}
          const isEdit = !!order._id
          const savedOrder = await orderService.save(order)
        } catch (err) {
          console.log(err)
        }
      },
  },
}
