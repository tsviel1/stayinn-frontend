<template>
    <section class="stay-reserve">
        <div class="reserve-card" shadow="always">
            <div class="order-form-header">
                <p>
                    <span class="cost">${{ stay.price }} <span>night</span></span>
                </p>
                <p>
                    <span class="reviews">{{ stay.reviews.length }} reviews</span>
                </p>
            </div>
            <reserve-table :stay="stay" />
            <reserve-btn @click="reserveTrip" />
            <ul class="flex statement-container">
                <li class="statement">
                    You won't be charged yet
                </li>
            </ul>
            <div>
                <div>${{ stay.price }} x </div>
            </div>
        </div>
        <div class="reserve-modal">
            <h1 class="modal-title">Confirm and pay</h1>
            <div v-if="stay.reviews.length >= 4" class="rare-find">
                <div>
                    This is a rare find.
                </div>
                <div>{{ stay.host.fullname }} place is usually booked.</div>
            </div>
            <div class="trip-details">
                <h4>Your Trip</h4>
                <div>Dates</div>
                <p>{{ startDate }}-{{ endDate}}</p>

            </div>


        </div>
    </section>
</template>

<script>
import reserveTable from './reserve-table.cmp.vue'
import reserveBtn from './reserve-btn.cmp.vue'
import { showSuccessMsg } from '../services/event-bus.service'

export default {
    name: 'stay-reserve',
    props: {
        stay: Object
    },
    components: {
        reserveTable,
        reserveBtn
    },
    data() {
        return {

        }
    },
    created() {
    },
    methods: {
        async reserveTrip() {
            showSuccessMsg('Trip Reserved')
            console.log('trip reserved')
            await this.$store.dispatch({ type: 'saveOrder' })
        },
    },
    computed: {
        reviewsAvg() {
            // const reviews = this.stay.reviews
            // let sumRate = reviews.reduce((acc, currVal) => acc + currVal.rate, 0)
            // let avg = sumRate / reviews.length
            // return avg
            return this.$store.getters.getCurrStayAvg
        },
            startDate() {
                console.log('yoo');
                const checkInDate=  this.$store.getters.getStartDate
                console.log(checkInDate);
                // checkInDate.setMonth(checkInDate.getMonth())

                // console.log(res);
                // const checkInMonth = startTrip.toLocaleString('en-US', {
                //     month: 'short',
                // })
                // const checkInDay = startTrip.getDate()
                // const checkInDate = `${checkInMonth} ${checkInDay}`
                // return checkInDate
            },
            endDate() {
                return this.$store.getters.getEndDate
            },
    },
}

</script>