<template>
    <section>
        <DoughnutChart v-if="ordersStatus" :chartData="ordersStatus" />
        <LineChart :chartData="ordersIncome" />
    </section>
</template>

<script>
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
    name: 'chart-card',
    props: {
        orders: Object
    },
    components: {
        DoughnutChart,
        LineChart,
    },
    data() {
        return {
            

            ordersIncome: {
                labels: ['22/07/2002', '24/07/2022', '26/07/2022', '28/02/2022'],
                datasets: [
                    {
                        data: [30, 40, 60, 70, 5],
                        backgroundColor: ['#bd1e59', '#e61e4d', '#d2729e', '#fbadc4'],
                    },
                ],
            }
        }
    },
    created() { },
    methods: {},
    computed: {
        ordersStatus() {
            const status= {
                labels: ['Pending', 'Rejected', 'Approved'],
                datasets: [
                    {
                        data:[ this.orders.filter((order) => order.status === 'pending').length, this.orders.filter((order) => order.status === 'rejected').length,this.orders.filter((order) => order.status === 'approved').length],
                        backgroundColor: ['#bd1e59', '#e61e4d', '#fbadc4'],
                    },
                ],
            }
            console.log(this.orders);
            console.log(status);
            return status
        },
        // pendingOrders() {
        //     const pendings =
        //     return pendings
        // },
        // rejectedOrders() {
        //     const rejecteds =
        //     return rejecteds
        // },
        // approvedOrders() {
        //     const approveds = 
        //     return approveds
        // },
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>