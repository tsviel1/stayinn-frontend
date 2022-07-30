<template>
    <section>
        <DoughnutChart v-if="ordersStatus" :chartData="ordersStatus" />
        <h3> Total income: {{ calcIncome }}</h3>
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
            pendings: null
        }
    },
    created() { },
    methods: {
        
    },
    computed: {
        
        calcIncome(){
            return this.$store.getters.calcTotalIncome
        },
       
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
            // console.log(this.orders);
            // console.log(status);
            return status
        },
       
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>