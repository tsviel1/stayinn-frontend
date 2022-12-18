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
      tripCost: null,
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
    getTripCost({ trip }) {
      return trip.tripCost
    }
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
      state.trip.dest.cityName = filterBy.txt
    },
    setAdults(state, { newAdultsNum }) {
      state.trip.guests.adults = newAdultsNum
    },
    setChildren(state, { newChildrenNum }) {
      state.trip.guests.children = newChildrenNum
    },
    setTripCost(state, rootState) {
      const nightPrice = rootState.stayStore.currStay.price
      const chckInDate = state.trip.chckInDate.getTime()
      const chckOutDate = state.trip.chckOutDate.getTime()
      const diff = (chckOutDate - chckInDate) / (1000 * 3600 * 24)
      const total = Math.round(diff * nightPrice) + Math.round(diff * nightPrice / 9)
      state.trip.tripCost = total
    },
    resetTrip(state) {
      state.trip.chckInDate = null
      state.trip.chckOutDate = null
      state.trip.guests.adults = 0
      state.trip.guests.children = 0
      state.trip.dest.cityName = null
      state.tripCost = null
    }
  },
  actions: {
  },
}
