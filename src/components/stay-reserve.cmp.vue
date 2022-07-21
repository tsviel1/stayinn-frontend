<template>
    <section class="stay-reserve">
        <el-card shadow="always">
            <div class="order-form-header">
                <p>
                    <span class="cost">${{ stay.price }}</span> night
                </p>
                <p>
                    <i class="fas fa-star"></i> {{ reviewsAvg }} ·
                    <span class="reviews">{{ stay.reviews.length }} reviews</span>
                </p>
            </div>
            <reserve-table :stay="stay" />
            <reserve-btn @click="reserveTrip" />
        </el-card>
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
        reserveTrip() {
            showSuccessMsg('Trip Reserved')
        }
    },
    computed: {
        reviewsAvg() {
            const reviews = this.stay.reviews
            let sumRate = reviews.reduce((acc, currVal) => acc + currVal.rate, 0)
            let avg = sumRate / reviews.length
            return avg
        }
    },
}

</script>