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
    async loadOrders({ commit, state }) {
        try {
          const orders = await orderService.query()
          commit({type: 'setOrders', orders})
        } catch (err) {}
      },
      async saveOrder({ commit, state, rootState }) {
        try {
        //   console.log(state.trip.chckInDate)
          const currStay = rootState.stayStore.currStay
          const trip = rootState.tripStore.trip
          let order = { ...trip, stay: currStay, createdAt: Date.now() }
          const isEdit = !!order._id
          const savedOrder = await orderService.save(order)
        } catch (err) {
          console.log(err)
        }
      },
  },
}
