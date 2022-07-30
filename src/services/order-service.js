import { storageService } from './async-storage.service.js'
const ORDER_KEY = 'orderDB'
import { httpService } from './http.service'
import {
  socketService,
  SOCKET_EVENT_ORDER_SENT,
  SOCKET_EVENT_ORDER_RECEIVED,
  SOCKET_EVENT_REJECT_ORDER,
  SOCKET_EVENT_APPROVE_ORDER,
} from './socket.service.js'
import store from '../store/index.js'
const ENDPOINT = 'order'

const orderChannel = new BroadcastChannel('orderChannel')

// async function query() {
//   let orders = await storageService.query(ORDER_KEY)
//   return orders
// }

// Tbc onapprove
async function onApprove() {
  socketService.on(SOCKET_EVENT_APPROVE_ORDER, (order) => {
    // Show success message for this specific user
  })
}

;(() => {
  setTimeout(() => {
    socketService.on(SOCKET_EVENT_ORDER_SENT, (order) => {
      console.log('GOT from socket', order)
      store.dispatch({ type: 'loadOrders' })
    })
    // socketService.on(SOCKET_EVENT_ORDER_RECEIVED, (order) => {
    //   this.$store.dispatch({type: 'loadOrders'}, order)
    //   console.log('Sending a message from server: ORDER WAS ADDED')
    // })
  }, 0)
})()

async function query(user) {
  return await httpService.get(ENDPOINT, user)
}


// function getById(orderId) {
//   return storageService.get(ORDER_KEY, orderId)
// }

async function getOrderById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`)
}

// function save(order) {
//     const savedorder = order._id
//       ? storageService.put(ORDER_KEY, order)
//       : storageService.post(ORDER_KEY, order)
//     return savedorder
//   }

async function save(order) {
  // return order._id
  // ? await httpService.put(`${ENDPOINT}/${order._id}`, order)
  // : await httpService.post(ENDPOINT, order)
  if (order._id) {
    const savedOrder = await httpService.put(`${ENDPOINT}/${order._id}`, order)
    if (order.status === 'approved') {
      socketService.on(SOCKET_EVENT_APPROVE_ORDER, (order) => {
        // Show success message for this specific user
      })
    } else if (order.status === 'rejected') {
      socketService.on(SOCKET_EVENT_REJECT_ORDER, (order) => {
        // Show success message for this specific user
      })
    }
    return savedOrder
  } else {
    return await httpService.post(ENDPOINT, order)
    
  }
}

export const orderService = {
  query,
  getOrderById,
  save,
}
