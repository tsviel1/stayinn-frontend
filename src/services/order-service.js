import { storageService } from './async-storage.service.js'
const ORDER_KEY = 'orderDB'
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_ORDER_SENT, SOCKET_EVENT_ORDER_RECEIVED } from './socket.service.js';
import  store  from '../store/index.js'
const ENDPOINT = 'order'

const orderChannel = new BroadcastChannel('orderChannel')

// async function query() {
//   let orders = await storageService.query(ORDER_KEY)
//   return orders
// }

;(()=>{
  setTimeout(() =>{
    socketService.on(SOCKET_EVENT_ORDER_SENT, (order) => {
      console.log('GOT from socket', order)
      store.commit({type: 'setOrder', order})
    })
  })
  socketService.on(SOCKET_EVENT_ORDER_RECEIVED, (order) => {
    this.$store.dispatch({type: 'loadOrders'})
    console.log('Sending a message from server: ORDER WAS ADDED')
  })
})

async function query(user) {
  console.log('order query')
  return await httpService.get(ENDPOINT, user)
}

// function getById(orderId) {
//   return storageService.get(ORDER_KEY, orderId)
// }

async function geOrderById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`)
}

// function save(order) {
//     const savedorder = order._id
//       ? storageService.put(ORDER_KEY, order)
//       : storageService.post(ORDER_KEY, order)
//     return savedorder
//   }

async function save(order) {
  return order._id 
  ? await httpService.put(`${ENDPOINT}/${order._id}`, order)
  : await httpService.post(ENDPOINT, order)
}

  export const orderService = {
    query,
    geOrderById,
    save,

  }