<template>
    <section >
        <h3 class="total-income"> Monthly earnings: ${{ calcIncome }} </h3>
        <h3 class="avg-rating">Average Rating: {{ avgRate }}</h3>
        <h3 class="total-reviews">Amount of reviews: {{ sumReviews }}</h3>
        <h2 class="chart-area-subtitle">Overall incoming orders</h2>
        <DoughnutChart v-if="ordersStatus" :chartData="ordersStatus" />
    </section>
</template>

<script>
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
    name: 'chart-card',
    props: {
        orders: Object,
        sumReviews: Number,
        avgRate: String,
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
    created() { 
       
    },
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

            return status
        },
        
       
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
.star{
    font-size: 13px;
    
}
span{
padding-right: 5px;
padding-left: 5px;
}
.avarage{
    display: flex;
    align-items: center;
}
</style>