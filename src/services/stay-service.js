import { storageService } from "./async-storage.service.js";
const STAY_KEY = 'stayDB'

function query() {
    return storageService.query(STAY_KEY)
}

function get(stayId) {
    return storageService.get(STAY_KEY, stayId)
}

function save(stay) {
    const savedStay = stay._id
        ? storageService.put(STAY_KEY, stay)
        : storageService.post(STAY_KEY, stay)
    return savedStay
}

function removeReview(stayId, reviewId) {
    return get(stayId)
        .then(stay => {
            const idx = stay.reviews.findIndex(review => review._id === reviewId)
            stay.reviews.splice(idx, 1)
            return storageService.put(STAY_KEY, stay)
        })
}


function addReview(stayId, review) {
    review.id = utilService.makeId()
    return get(stayId)
        .then(stay => {
            if (!stay.reviews) stay.reviews = []
            stay.reviews.push(review)
            return storageService.put(STAY_KEY, stay)
        })
}