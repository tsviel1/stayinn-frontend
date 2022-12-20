<template>
    <section class="chart-card">
        <div class="stats">
            <div class="stats-section flex justify-between">
                <div class="key">
                    Monthly earnings:
                </div>
                <div class="value">
                    ${{ (calcIncome).toLocaleString() }}
                </div>
            </div>
            <div class="stats-section flex justify-between">
                <div class="key">
                    Average Rating:
                </div>
                <div class="value">
                    {{ avgRate }}
                </div>
            </div>
            <div class="stats-section flex justify-between border">
                <div class="key">
                    Amount of reviews:
                </div>
                <div class="value">
                    {{ sumReviews }}
                </div>
            </div>
        </div>
        <div class="chart-main">
            <DoughnutChart v-if="ordersStatus" :chartData="ordersStatus" :options="options" />
        </div>
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
            pendings: null,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }
        }
    },
    computed: {
        calcIncome() {
            return this.$store.getters.calcTotalIncome
        },
        ordersStatus() {
            const status = {
                labels: ['Pending', 'Rejected', 'Approved'],
                datasets: [
                    {
                        data: [this.orders.filter((order) => order.status === 'pending').length, this.orders.filter((order) => order.status === 'rejected').length, this.orders.filter((order) => order.status === 'approved').length],
                        backgroundColor: ['#fc5e03', '#f56c6c', '#67c23a'],
                    },
                ],
            }
            return status
        },
    },
}

</script>

<style lang="scss" scoped>
.star {
    font-size: 13px;

}

span {
    padding-right: 5px;
    padding-left: 5px;
}

.avarage {
    display: flex;
    align-items: center;
}
</style>