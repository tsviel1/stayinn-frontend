import { orderService } from "../../services/order-service.js";

export default {
    state: {
        trip: {
            startDate: '2025/10/15',
            endDate: '2025/10/17',
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
        getStartDate({trip}) {return trip.startDate},
        getEndDate({trip}) {return trip.endDate},
        getGuests({trip}) {return trip.guests},
        getCitySearched({trip}) {return trip.dest.city}
    },
    mutations: {
        setStartDate(state, {startDate}) {
            state.trip.startDate = startDate
            console.log(state.trip)
        },
        setEndDate(state, {endDate}) {
            state.trip.endDate = endDate
            console.log(state.trip)
        },
        setGuests(state, {guests}) {
            state.guests = guests
            console.log(state.trip)
        },
        setTripCity(state, {tripCity}) {
            state.dest.city = tripCity
            console.log(state.trip)
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