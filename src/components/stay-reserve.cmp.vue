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
                <div>${{stay.price}} x </div>
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
        }
    },
    computed: {
        reviewsAvg() {
            // const reviews = this.stay.reviews
            // let sumRate = reviews.reduce((acc, currVal) => acc + currVal.rate, 0)
            // let avg = sumRate / reviews.length
            // return avg
            return this.$store.getters.getCurrStayAvg
        }
    },
}

</script>