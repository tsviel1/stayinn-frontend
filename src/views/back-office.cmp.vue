<template>
    <section class="back-office container" v-if="orders">
        <!-- <pre>{{ getOrders }}</pre> -->
        <div class="data-card">
            
            <h1>Orders status</h1>
            <DoughnutChart :chartData="ordersStatus" />
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

Chart.register(...registerables);

export default {
    name: 'back-office',
    components: {
        DoughnutChart,
        orderPreview,
        LineChart
    },
    data() {
        return {
            ordersStatus: {
                labels: ['Pending', 'Rejected', 'Approved'],
                datasets: [
                    {
                        data: [30, 40, 60],
                        backgroundColor: ['#bd1e59', '#e61e4d', '#fbadc4'],
                    },
                ],
            },
            ordersIncome:{
                labels: ['22/07/2002','24/07/2022', '26/07/2022', '28/02/2022'],
                 datasets: [
                    {
                        data: [30, 40, 60, 70, 5],
                        backgroundColor: ['#bd1e59', '#e61e4d','#d2729e', '#fbadc4'],
                    },
                ],
            }
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