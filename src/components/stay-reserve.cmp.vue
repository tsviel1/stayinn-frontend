<template>
    <section class="stay-reserve">
        <div class="reserve-card" shadow="always">
            <div class="order-form-header">
                <p>
                    <span class="cost">${{ stay.price }} <span>night</span></span>
                </p>
                <p>
                    <img class="star-svg" src="../assets/svgs/star.svg" /> <span class="avg-span">{{reviewsAvg.toFixed(1)}}</span> ·<span class="reviews">{{ stay.reviews.length }} reviews</span>
                </p>
            </div>

            <reserve-table :stay="stay" />
            <reserve-btn v-if="getIsDatesSelected" @click="reserveTrip" />
            <check-avail-btn v-if="!getIsDatesSelected" />
            <ul class="flex statement-container">
                <li class="statement">
                    You won't be charged yet
                </li>
            </ul>
            <order-calc-section v-if="getIsDatesSelected" />

        </div>
    </section>

</template>

<script>
import modalSvg from '../components/svg/reserve-modal-svg.vue'
import reserveTable from './reserve-table.cmp.vue'
import reserveBtn from './reserve-btn.cmp.vue'
import checkAvailBtn from './check-avail-btn.cmp.vue'
import orderCalcSection from './order-calc.cmp.vue'
import { showSuccessMsg } from '../services/event-bus.service'

export default {
    name: 'stay-reserve',
    props: {
        stay: Object
    },
    components: {
        reserveTable,
        reserveBtn,
        orderCalcSection,
        modalSvg,
        checkAvailBtn
    },
    data() {
        return {
            isShow: false
        }
    },
    created() {
    },
    methods: {
        
        async reserveTrip() {
            this.$emit('onReserve')
        },

    },
    computed: {
        reviewsAvg() {
            return this.$store.getters.getCurrStayAvg
        },
        

        getIsDatesSelected() {
            const chckIn = this.$store.getters.getCurrChckInDate
            const chckOut = this.$store.getters.getCurrChckOutDate
            if (chckIn & chckOut) return true
            else return false
        }
    },
}

</script>