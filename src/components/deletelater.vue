<template>
    <section class="reserve-table">
        <div class="order-data">
            <label class="date-picker">
                <div class="date-input">
                    <label class="date-head-reserve-table">check-in</label>
                    <div class="date-reserve-table">{{ startDate }}</div>
                </div>
                <div class="date-input">
                    <label class="date-head-reserve-table">checkout</label>
                    <div class="date-reserve-table">{{ endDate }}</div>
                </div>
                <el-date-picker class="date-picker-container" v-model="tripDates" type="daterange"
                    @change="setTripDates" range-separator="To" start-placeholder="Start date"
                    end-placeholder="End date" />
            </label>
            <div class="guest-input">
                <label>guests</label>
                <input :placeholder="guests.adults" />
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
    methods: {},
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

<style lang="scss" scoped>
</style>