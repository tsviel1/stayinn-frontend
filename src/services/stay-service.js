import { storageService } from "./async-storage.service.js";
import { db } from "./data/airbnb.js"
const STAY_KEY = 'stayDB'

// let gStays;

_createStays()

async function query(filterBy) {
    // console.log(filterBy)
    let stays = await storageService.query(STAY_KEY)
    if (!filterBy) {
        return stays
    }
    if (filterBy.price) {
        console.log(filterBy)
        stays = stays.filter((stay) => filterBy.price.min <= stay.price && stay.price <= filterBy.price.max)
    }
    if (filterBy.txt && filterBy.beds && filterBy.bedrooms) {
        console.log('Infrist condition')
    } else if (filterBy.txt && filterBy.beds) {
        console.log('In second condition')
    } else if (filterBy.txt && filterBy.bedrooms) {
        console.log('third condition ') 
    } else if (filterBy.beds && filterBy.bedrooms) {
        stays =stays.filter((stay) => filterBy.beds <= stay.beds && filterBy.bedrooms <= stay.bedrooms )
    } else if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.loc.address))
        // console.log(stays)
    } else if (filterBy.beds) {
        stays = stays.filter((stay) => filterBy.beds <= stay.beds  )
    } else if (filterBy.bedrooms) {
        stays =stays.filter((stay) => filterBy.bedrooms <= stay.bedrooms)
    } 

    return stays
    
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