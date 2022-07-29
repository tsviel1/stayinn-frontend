<template>
    <section class="back-office container" v-if="orders">
        <!-- <pre>{{ getOrders }}</pre> -->
        <div class="data-card">
            
            <h1>Orders status</h1>
            <chart-card :orders="orders" />
            
            <h1>Orders weekly incoming</h1>
            <LineChart :chartData="ordersIncome" />
        </div>
        <div>
            <h1 class="back-office-title ">Pending Orders</h1>
            <ul class="orders-list clean-list">
                <li v-for="(order) in orders" :key="order._id">
                    <order-preview :order="order" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import orderPreview from '../components/orderPreview.cmp.vue'
import { DoughnutChart,LineChart } from 'vue-chart-3';
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