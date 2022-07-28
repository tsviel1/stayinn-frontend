import { orderService } from '../../services/order-service.js'

export default {
  state: {
    trip: {
      chckInDate: null,
      chckOutDate: null,
      guests: {
        adults: 0,
        children: 0,
      },
      dest: {
        cityName: null,
      },
    },
  },
  getters: {
    getCurrChckInDate({ trip }) {
      return trip.chckInDate
    },
    getCurrChckOutDate({ trip }) {
      return trip.chckOutDate
    },
    getGuests({ trip }) {
      return trip.guests
    },
    getCitySearched({ trip }) {
      return trip.dest.cityName
    },
    getAdultsNum({ trip }) {
      return trip.guests.adults
    },
    getChildrenNum({ trip }) {
      return trip.guests.children
    },
   
  },
  mutations: {
    setTripDates(state, { chckInDate, chckOutDate }) {
      state.trip.chckInDate = chckInDate
      state.trip.chckOutDate = chckOutDate
    },
    setGuests(state, { guests }) {
      state.guests = guests
    },
    setTripCity(state, { filterBy }) {
      console.log('tripCity', filterBy.txt)

      state.trip.dest.cityName = filterBy.txt
    },
    setAdults(state, { newAdultsNum }) {
      state.trip.guests.adults = newAdultsNum
    },
    setChildren(state, { newChildrenNum }) {
      state.trip.guests.children = newChildrenNum
    },
   
  },
  actions: {
  },
}

// "2022-07-18T21:00:00.000Z"
