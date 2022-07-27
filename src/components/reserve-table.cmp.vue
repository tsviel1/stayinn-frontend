<template>
    <section class="reserve-table">
        <div class="order-data">
            <label class="date-picker">
                <div class="date-input">
                    <div class="date-head-reserve-table">check-in</div>
                    <div class="date-reserve-table">{{ startDate }}</div>
                </div>
                <div class="date-input last">
                    <div class="date-head-reserve-table">checkout</div>
                    <div class="date-reserve-table">{{ endDate }}</div>
                </div>
                <el-date-picker class="date-picker-container" v-model="tripDates" type="daterange"
                    @change="setTripDates" range-separator="To" start-placeholder="Start date"
                    end-placeholder="End date" />
            </label>
            <div class="guest-input">
                <label for="guests-number">guests</label>
                <div id="guests-number" class="guests-number">{{guests.adults}}</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'reserve-table',
    props: {
        stay: Object
    },
    data() {
        return {
            tripDates: null
        }
    },
    methods: {
        setTripDates() {
            const chckInDate = this.tripDates[0]
            const chckOutDate = this.tripDates[1]
            this.$store.commit({
                type: 'setTripDates',
                chckInDate, chckOutDate
            })
        }
    },
    computed: {
        startDate() {
            const chckInDate = this.$store.getters.getCurrChckInDate
            if (!chckInDate) return 'Add date'
            return chckInDate.toLocaleDateString()
        },
        endDate() {
            const ckckOutDate = this.$store.getters.getCurrChckOutDate
            if (!ckckOutDate) return 'Add date'
            return ckckOutDate.toLocaleDateString()
        },
        guests() {
            return this.$store.getters.getGuests
        },
    },
    created() {
        const chckInDate = this.$store.getters.getCurrChckInDate
        const chckOutDate = this.$store.getters.getCurrChckOutDate
        this.tripDates = [chckInDate, chckOutDate]
    }
}

</script>

<style lang="scss">
.date-picker-container {
    z-index: 1 !important;
    opacity: 0 !important;
    width: 270px !important;
    cursor: pointer !important;
}

.el-date-table td.today .el-date-table-cell__text {
    color: black !important;
}
</style>