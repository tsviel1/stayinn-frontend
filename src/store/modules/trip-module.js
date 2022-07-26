import { orderService } from "../../services/order-service.js";

export default {
    state: {
        trip: {
            chckInDate: null,
            chckOutDate: null,
            guests: {
                adults: 2,
                kids: 1
            },
            dest: {
                cityName: null
            }
        },
    },
    getters: {
        getCurrChckInDate({trip}) {return trip.chckInDate},
        getCurrChckOutDate({trip}) {return trip.chckOutDate},
        getGuests({trip}) {return trip.guests},
        getCitySearched({trip}) {return trip.dest.city}
    },
    mutations: {
        setTripDates(state, {chckInDate, chckOutDate}) {
            state.trip.chckInDate = chckInDate
            state.trip.chckOutDate = chckOutDate
            
        },
        setGuests(state, {guests}) {
            state.guests = guests
        },
        setTripCity(state, {tripCity}) {
            state.dest.city = tripCity
        }
    },
    actions: {
        async saveOrder({commit, state, rootState}) {
            try{
                const currStay = rootState.stayStore.currStay
                let order = {...state.trip, stay: currStay}
                const isEdit = !!order._id
                const savedOrder =  await orderService.save(order)

            } catch (err) {
                console.log(err)
            }
        },
    }
};

// "2022-07-18T21:00:00.000Z"