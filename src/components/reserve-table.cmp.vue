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
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>