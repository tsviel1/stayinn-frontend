<template>
    <section class="back-office-main main-layout-details">
        <h1>Orders status</h1>
        <!-- <pre>{{ getOrders }}</pre> -->
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
                    <h1>Weekly orders incoming</h1>
                    <chart-card :orders="orders" />
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
    data() {
        return {

        }

    },
    created() {
        this.$store.dispatch({ type: 'loadOrders' })

    },
    methods: {},
    computed: {
        orders() {
            return this.$store.getters.getOrders
        },

    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>