import { storageService } from './async-storage.service.js'
const ORDER_KEY = 'orderDB'
import { httpService } from './http.service'
const ENDPOINT = 'order'

// async function query() {
//   let orders = await storageService.query(ORDER_KEY)
//   return orders
// }

async function query(user) {
  // console.log(user)
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