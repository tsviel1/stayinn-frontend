<template>
    <section class="back-office-main main-layout-details">
        <div class="title-backoffice">
            <h1 class="back-office-title">Orders status</h1>
        </div>
        <div class="back-office">
            <div class="orders-list-main">
                <ul class="orders-list clean-list">
                    <li v-for="order in orders" :key="order._id">
                        <order-preview :order="order" />
                    </li>
                </ul>
            </div>
            <div class="back-office-charts" v-if="orders">
                <div class="data-card">
                    <h1 class="chart-area-title">Hosting Summary</h1>
                    <h2 class="bold">Fantastic Job!</h2>
                    <h2 class="subtitle-area border">Guests love what you're doing, keep up the good work and review
                        your orders stats!</h2>
                    <chart-card v-if="getSumReviews && getAvgRate" :avgRate="getAvgRate" :sumReviews="getSumReviews"
                        :orders="orders" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import orderPreview from '../components/orderPreview.cmp.vue'
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import ChartCard from '../components/chart-card.cmp.vue';

Chart.register(...registerables);

export default {
    name: 'back-office',
    components: {
        DoughnutChart,
        orderPreview,
        LineChart,
        ChartCard
    },
    created() {
        this.$store.dispatch({ type: 'loadOrders' })
        this.$store.dispatch({ type: 'loadHostStays' })
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders
        },
        getSumReviews() {
            return this.$store.getters.getTotalReviews
        },
        getAvgRate() {
            return this.$store.getters.getAvgRate
        },
    }
}
</script>