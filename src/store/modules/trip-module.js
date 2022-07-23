

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
        setStartDate(state, {startDate}) {
            state.trip.startDate = startDate
        },
        setEndDate(state, {endDate}) {
            state.trip.endDate = endDate
        },
        setGuests(state, {guests}) {
            state.guests = guests
        }
    },
};

// "2022-07-18T21:00:00.000Z"