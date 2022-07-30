import { orderService } from '../../services/order-service.js'

export default {
  state: {
    oreders: null,
    order:null
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
      return approvedOrders.reduce((acc, order) => {
            const {chckInDate, chckOutDate} = order  
            const chckInMls =  new Date (chckInDate).getTime()
            const chckOutMls = new Date (chckOutDate).getTime()
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
    setOrder(state,{order}){
      state.order=order
    }
  },
  actions: {
    async loadOrders({ commit, state, rootState }) {
      try {
        console.log('in');
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
        commit({type:'setOrder',order})
      } catch (err) {
        console.log(err)
      }
    },
    // async approveOrder({commit}, { order }) {
    //   // commit({type: 'approveOrder', order })
    // },
  },
}
