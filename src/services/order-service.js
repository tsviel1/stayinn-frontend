import { storageService } from './async-storage.service.js'
const ORDER_KEY = 'orderDB'

async function query() {
  let orders = await storageService.query(ORDER_KEY)
  return orders
}

function getById(orderId) {
  return storageService.get(ORDER_KEY, orderId)
}

function save(order) {
    const savedorder = order._id
      ? storageService.put(ORDER_KEY, order)
      : storageService.post(ORDER_KEY, order)
    return savedorder
  }

  export const orderService = {
    query,
    getById,
    save,

  }