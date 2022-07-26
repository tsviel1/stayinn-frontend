import { storageService } from './async-storage.service.js'
import { httpService } from './http.service'
import { db } from './data/airbnb.js'
import newData from './data/stays.json'
const STAY_KEY = 'stayDB'
const data = newData
// let gStays;
// console.log(data)
_createStays()

const ENDPOINT = 'stay'


// async function query(filterBy) {
// console.log(filterBy)
//   let stays = await storageService.query(STAY_KEY)
//   // console.log(stays)
//   if (!filterBy) {
//     return stays
//   }
//   if (filterBy.price) {
//     console.log(filterBy)
//     stays = stays.filter(
//       (stay) =>
//         filterBy.price.min <= stay.price && stay.price <= filterBy.price.max
//     )
//   }
//   if (filterBy.txt && filterBy.beds && filterBy.bedrooms) {
//     stays = stays.filter((stay) => {
//       return (
//         regex.test(stay.address.city) &&
//         filterBy.beds <= stay.beds &&
//         filterBy.bedrooms <= stay.bedrooms
//       )
//     })
//   } else if (filterBy.txt && filterBy.beds) {
//     stays = stays.filter((stay) => {
//       return regex.test(stay.address.city) && filterBy.beds <= stay.beds
//     })
//   } else if (filterBy.txt && filterBy.bedrooms) {
//     stays = stays.filter((stay) => {
//       return regex.test(stay.address.city) && filterBy.bedrooms <= stay.bedrooms
//     })
//   } else if (filterBy.beds && filterBy.bedrooms) {
//     stays = stays.filter(
//       (stay) => filterBy.beds <= stay.beds && filterBy.bedrooms <= stay.bedrooms
//     )
//   } else if (filterBy.txt) {
//     const regex = new RegExp(filterBy.txt, 'i')
//     stays = stays.filter((stay) => regex.test(stay.address.city))
//     // console.log(stays)
//   } else if (filterBy.beds) {
//     stays = stays.filter((stay) => filterBy.beds <= stay.beds)
//   } else if (filterBy.bedrooms) {
//     stays = stays.filter((stay) => filterBy.bedrooms <= stay.bedrooms)
//   }

//   return stays
// }
// await httpService.get(`${ENDPOINT}/${stayId}`)

async function query(filterBy = {}) {
  console.log(filterBy)
  return await httpService.get(ENDPOINT, filterBy)
}

// function getById(stayId) {
//   return storageService.get(STAY_KEY, stayId)
// }

async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`)
  }

// function save(stay) {
//   const savedStay = stay._id
//     ? storageService.put(STAY_KEY, stay)
//     : storageService.post(STAY_KEY, stay)
//   return savedStay
// }

// async function save(stay) {
//   if (stay._id) {
//     const stay = httpService.post('stay')
//   } else {

//   }
// }

function removeReview(stayId, reviewId) {
  return get(stayId).then((stay) => {
    const idx = stay.reviews.findIndex((review) => review._id === reviewId)
    stay.reviews.splice(idx, 1)
    return storageService.put(STAY_KEY, stay)
  })
}

function addReview(stayId, review) {
  review.id = utilService.makeId()
  return get(stayId).then((stay) => {
    if (!stay.reviews) stay.reviews = []
    stay.reviews.push(review)
    return storageService.put(STAY_KEY, stay)
  })
}

async function _createStays() {
  // console.log(data)
  let stays = await storageService.query(STAY_KEY)
  // console.log('CREATE STAYS:', stays)
  if (!stays || !stays.length) {
    localStorage.setItem(STAY_KEY, JSON.stringify(data))
  }
}

export const stayService = {
  query,
  getById,
  // save,
  removeReview,
  addReview,
}
