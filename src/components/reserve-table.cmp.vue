<template>
    <section class="reserve-table">
        <div class="order-data">
            <div class="date-picker">
                <div class="date-input">
                    <label>check-in</label>
                    <input :placeholder="startDate" />
                </div>
                <div class="date-input">
                    <label>checkout</label>
                    <input :placeholder="endDate" />
                </div>
            </div>

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
            tableData: null
        }
    },
    created() {
        console.log('this.startDate', this.startDate)
        

    },
    methods: {},
    computed: {
        startDate() {
            return this.$store.getters.getStartDate
        },
        endDate() {
            return this.$store.getters.getEndDate
        },
        guests() {
            return this.$store.getters.getGuests
        },
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>