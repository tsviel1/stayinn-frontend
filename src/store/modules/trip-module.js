

export default {
    state: {
        trip: {
            startDate: '2025/10/15',
            endDate: '2025/10/17',
            guests: {
                adults: 2,
                kids: 1
            }
        },
    },
    getters: {
        getStartDate({trip}) {return trip.startDate},
        getEndDate({trip}) {return trip.endDate},
        getGuests({trip}) {return trip.guests}
    },
    mutations: {
        setStartDate(state, {date}) {
            state.startDate = date
        },
        setEndDate(state, {date}) {
            state.endDate = date
        },
        setGuests(state, {guests}) {
            state.guests = guests
        }
    },
};