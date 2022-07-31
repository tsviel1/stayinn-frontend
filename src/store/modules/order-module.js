import { orderService } from '../../services/order-service.js'

export default {
  state: {
    orders: null,
  },
  getters: {
    getOrders({ orders }) {
      return orders
    },
    rejectedOrders({ orders }) {
      const rejecteds = orders.filter((order) => order.status === 'rejected')
      return rejecteds
    },
    approvedOrders({ orders }) {
      const approveds = orders.filter((order) => order.status === 'approved')
      return approveds
    },
    pendingOrders({ orders }) {
      const pendings = orders.filter((order) => order.status === 'pending')
      console.log(pendings)
      return pendings
    },
    calcTotalIncome({ orders }, { approvedOrders }) {
      return approvedOrders.reduce((acc, order) => {
        const { chckInDate, chckOutDate } = order
        const chckInMls = new Date(chckInDate).getTime()
        const chckOutMls = new Date(chckOutDate).getTime()
        const diff = chckOutMls - chckInMls
        const diffInDays = diff / (1000 * 3600 * 24)
        const { price } = order.stay
        const total = price * diffInDays
        return acc + total
      }, 0)
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
    },
    setOrder(state, { order }) {
      state.order = order
    },
    approveOrder(state, { order }) {
      // console.log('order', order)

      const orderId = order._id
      const idx = state.orders.findIndex((order) => order._id === orderId)
      state.orders[idx].status = 'approved'
    },
    rejectOrder(state, { order }) {
      const orderId = order._id

      const idx = state.orders.findIndex(order => order._id === orderId)
      state.orders[idx].status = 'rejected'
    },
  },
<<<<<<< HEAD
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
          commit({ type: 'setOrder', order })
        } catch (err) {
          console.log(err)
        }
      },
      async approveOrder({ commit, state }, { order }) {
        try {
          const savedOrder = await orderService.save(order)
          commit({ type: 'approveOrder', order: savedOrder})
        } catch (err) {
          throw err
        }
      },
      async rejectOrder({ commit, state }, { order }) {
        try {
          order.status = 'rejected'
          const savedOrder = await orderService.save(order)
          commit({ type: 'rejectOrder', order: savedOrder })
        } catch (err) {
          throw err
=======
  actions: {
    async loadOrders({ commit, state, rootState }) {
      try {
        console.log('in load orders')
        const currUser = rootState.userStore.loggedinUser
        const orders = await orderService.query(currUser)
        console.log(orders)
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
>>>>>>> 33fb8ff89ecf3a33976b9e0819ac1f8ebfe262d4
        }
        const isEdit = !!order._id
        const savedOrder = await orderService.save(order)
        commit({ type: 'setOrder', order })
      } catch (err) {
        console.log(err)
      }
    },
    async approveOrder({ commit, state }, { order }) {
      try {
        console.log('in approve order')
        const savedOrder = await orderService.save(order)
        commit({ type: 'approveOrder', order: savedOrder })
      } catch (err) {
        throw err
      }
    },
    async rejectOrder({ commit, state }, { order }) {
      try {
        console.log('in reject order')
        order.status = 'rejected'
        const savedOrder = await orderService.save(order)
        commit({ type: 'rejectOrder', order: savedOrder })
      } catch (err) {
        throw err
      }
      // async approveOrder({commit}, { order }) {
      //   // commit({type: 'approveOrder', order })
      // },
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
        commit({ type: 'setOrder', order })
      } catch (err) {
        console.log(err)
      }
    },
    async approveOrder({ commit, state }, { order }) {
      try {

        const savedOrder = await orderService.save(order)
        commit({ type: 'approveOrder', order: savedOrder })
      } catch (err) {
        throw err
      }
    },
    async rejectOrder({ commit, state }, { order }) {
      try {
        order.status = 'rejected'
        const savedOrder = await orderService.save(order)
        commit({ type: 'rejectOrder', order: savedOrder })
      } catch (err) {
        throw err
      }
    },
    async getOrdersByGuest({ commit, state, rootState }) {
      try {
        const currUser = rootState.userStore.loggedinUser
        const trips = await orderService.query(currUser)
        commit({ type: 'setTrips', trips })
      } catch (err) {
        console.log('Couldn\'nt load trips', err)
      }
    },

    // async approveOrder({commit}, { order }) {
    //   // commit({type: 'approveOrder', order })
    // },
  },
}

