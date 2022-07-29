<template>
    <section v-if="user" class="order-preview  flex">
        <div class="preview-inner flex">
            <div class="guest-details flex">
                <user-img class="guest-img" :order="order" />
                <div class="guest-details-inner flex">
                    <h3 class="guest-name">{{  order.by.fullname }}</h3>
                    <h3 class="order-created-at">Created at: {{ formatCreatedAt }}</h3>
                    <div class="sub-title">
                        <span class="order-details">{{ order.guests.adults + order.guests.children }} guests <span>
                            |
                            </span></span>
                        <span class="order-details"> {{ formatCheckin }} <span> - </span></span>

                        <span class="order-details">{{ formatCheckout }} <span> | </span></span>
                        <span class="order-details "><p class="last-details">{{ order.stay.name }} </p></span>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <el-button type="success" plain>Approve</el-button>
                <el-button type="danger" plain>Reject</el-button>
            </div>
        </div>


    </section>
</template>

<script>
import userImg from './user-img.cmp.vue'
export default {
    name: 'order-preview',
    props: {
        order: Object,
    },
    components: {
        userImg
    },
    data() {
        return {}
    },
    created() {
    },
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
        },
        formatCreatedAt() {
            const date = new Date(this.order.createdAt)
            const formatedDate = date.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
            return formatedDate
        },
        user() {
            console.log(this.$store.getters.loggedinUser)
            return this.$store.getters.loggedinUser
        }
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>