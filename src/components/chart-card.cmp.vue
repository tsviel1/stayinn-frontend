<template>
    <section>
        <DoughnutChart :chartData="ordersStatus" />
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
            ordersStatus: {
                labels: ['Pending', 'Rejected', 'Approved'],
                datasets: [
                    {
                        data: [30, 40, 60],
                        backgroundColor: ['#bd1e59', '#e61e4d', '#fbadc4'],
                    },
                ],
            },
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
    computed: {},
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>