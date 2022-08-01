import { orderService } from '../../services/order-service.js'
import { stayService } from '../../services/stay-service.js'

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
    getTotalReviews({orders, rootState}) {

    }
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
    async approveOrder({ commit, state }, { order }) {
      try {
        const savedOrder = await orderService.save(order)
        commit({ type: 'approveOrder', order: savedOrder })
      } catch (err) {
        throw err
      }
    },
=======
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
      async loadHostStays({commit, state, rootState}) {
        const currUser = rootState.userStore.loggedinUser
        const stays = await stayService.query(currUser)
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
>>>>>>> f468362b353962b46d65d537bf816413b3fe3664
    async rejectOrder({ commit, state }, { order }) {
      try {
        console.log('in reject order')
        order.status = 'rejected'
        const savedOrder = await orderService.save(order)
        commit({ type: 'rejectOrder', order: savedOrder })
      } catch (err) {
        throw err
      }
    },
<<<<<<< HEAD
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
=======
>>>>>>> f468362b353962b46d65d537bf816413b3fe3664
    async getOrdersByGuest({ commit, state, rootState }) {
      try {
        const currUser = rootState.userStore.loggedinUser
        const trips = await orderService.query(currUser)
        commit({ type: 'setTrips', trips })
      } catch (err) {
        console.log('Couldn\'nt load trips', err)
      }
    },
<<<<<<< HEAD
=======

 
>>>>>>> f468362b353962b46d65d537bf816413b3fe3664
  },
}

