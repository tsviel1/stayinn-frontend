import { orderService } from '../../services/order-service.js'

export default {
  state: {
    oreders: null,
  },
  getters: {
    getOrders({ orders }) {
      return orders
    },
    rejectedOrders({ orders }) {
      const rejecteds = orders.filter(
        (order) => order.status === 'rejected'
      )
      return rejecteds
    },
    approvedOrders({ orders }) {
      const approveds = orders.filter(
        (order) => order.status === 'approved'
      )
      return approveds
    },
    pendingOrders({ orders }) {
      const pendings = orders.filter((order) => order.status === 'pending')
      console.log(pendings)
      return pendings
    },
    calcTotalIncome({ orders }, {approvedOrders}) {
      approvedOrders.forEach((order) => {
        console.log(new Date(order.chckOutDate))
      })
      return approvedOrders
    }
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
    },
  },
  actions: {
    async loadOrders({ commit, state, rootState }) {
      try {
        const currUser = rootState.userStore.loggedinUser
        const orders = await orderService.query(currUser)
        commit({ type: 'setOrders', orders })
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
        let order = {
          ...trip,
          stay: currStay,
          createdAt: Date.now(),
          by: user,
          status: 'pending',
        }
        const isEdit = !!order._id
        const savedOrder = await orderService.save(order)
      } catch (err) {
        console.log(err)
      }
    },
    // async approveOrder({commit}, { order }) {
    //   // commit({type: 'approveOrder', order })
    // },
  },
}
