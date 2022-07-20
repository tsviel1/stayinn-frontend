import { storageService } from "./async-storage.service.js";
import { db } from "./data/airbnb.js"
const STAY_KEY = 'stayDB'

// let gStays;

_createStays()

function query() {
    return storageService.query(STAY_KEY)
}

function getById(stayId) {
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

async function _createStays() {
    let stays = await storageService.query(STAY_KEY)
    // console.log('CREATE STAYS:', stays)
    if(!stays || !stays.length ) {
        localStorage.setItem(STAY_KEY, JSON.stringify(db.stay))
    }
}

export const stayService = {
    query,
    getById,
    save,
    removeReview,
    addReview
}