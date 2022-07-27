<template>
    <section class="order-preview flex">
        <div>
            <div class="guest-details flex">
                <img class="guest-img" src="https://xsgames.co/randomusers/assets/avatars/female/1.jpg" />
                <h3 class="guest-name">User name</h3>
            </div>
            <div class="sub-title">
                <span class="order-details">{{ order.guests.adults + order.guests.children }} guests <span> |
                    </span></span>
                <span class="order-details"> {{ formatCheckin }} <span> - </span></span>

                <span class="order-details">{{ formatCheckout }} <span> | </span></span>
                <span class="order-details">{{ order.stay.name }} </span>
            </div>
        </div>
        <div class="buttons">
            <el-button type="success" plain>Approve</el-button>
            <el-button type="danger" plain>Reject</el-button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'order-preview',
    props: {
        order: Object,
    },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        formatCheckin() {
            // const newDate = new Date(this.order.chckInDate)
            // const year = newDate.getFullYear()
            // const month = newDate.getMonth()
            // const day = newDate.getDay()
            // const formatedDate = `${year}/${month}/${day}`
            // return formatedDate
            const checkInDate = new Date(this.order.chckInDate)
            const checkInMonth = checkInDate.toLocaleString('en-US', {
                month: 'short',
            })
            const checkInDay = checkInDate.getDate()
            return `${checkInMonth} ${checkInDay}`
        },
        formatCheckout() {
            // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            // const newDate = new Date(this.order.chckOutDate)
            // const year = newDate.getFullYear()
            // const month = newDate.getMonth()
            // const day = newDate.getDay()
            // const formatedDate = `${year}/${month}/${day}`
            // return formatedDate
            const checkOutDate = new Date(this.order.chckOutDate)
            const checkOutMonth = checkOutDate.toLocaleString('en-US', {
                month: 'short',
            })
            const checkOutDay = checkOutDate.getDate()
            return `${checkOutMonth} ${checkOutDay}`
        }
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>