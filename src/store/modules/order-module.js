import { orderService } from '../../services/order-service.js'
import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    orders: null,
    hostStays: null,
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
    getTotalReviews({ hostStays}) {
      
      const sumReviews = hostStays?.reduce((acc, stay) => {
          // console.log(stay.numOfReviews)
          return  stay.numOfReviews + acc
          
        }, 0)
        return sumReviews
    },
    getAvgRate({hostStays}) {
      const numOfStays = hostStays.length
      let avgRate = hostStays?.reduce((acc, stay) => {
        return stay.reviewScores.rating + acc

      }, 0)
      avgRate = ((avgRate / numOfStays) /20).toFixed(1)
      return avgRate
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
    },
    setOrder(state, { order }) {
      state.orders.unshift(order)
    },
    approveOrder(state, { order }) {
      // console.log('order', order)

      const orderId = order._id
      const idx = state.orders.findIndex((order) => order._id === orderId)
      state.orders[idx].status = 'approved'
    },
    rejectOrder(state, { order }) {
      const orderId = order._id

      const idx = state.orders.findIndex((order) => order._id === orderId)
      state.orders[idx].status = 'rejected'
    },
    setHostStays(state, { stays }) {
      state.hostStays = stays
      console.log(state.hostStays)
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
    async loadHostStays({ commit, state, rootState }) {
      try {
        const currUser = rootState.userStore.loggedinUser
        const filterBy = {hostId: currUser._id }
        const stays = await stayService.query(filterBy)
        console.log(`1`)
        commit({ type: 'setHostStays', stays })
      } catch (err) {
        throw err
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
        commit({ type: 'setOrder', order: savedOrder })
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
        console.log('in reject order')
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
        console.log("Couldn'nt load trips", err)
      }
    },
  },
}
