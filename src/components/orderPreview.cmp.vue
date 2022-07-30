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
            <div class="buttons" v-if="order.status === 'pending'">
                <el-button @click="approve" type="success" plain>Approve</el-button>
                <el-button @click ="reject" type="danger" plain>Reject</el-button>
            </div>
            <div :class="{'status-green': isApproved, 'status-red': !isApproved}" class="status flex" v-else>
                {{ order.status }}
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
            const checkInDate = new Date(this.order.chckInDate)
            const checkInMonth = checkInDate.toLocaleString('en-US', {
                month: 'short',
            })
            const checkInDay = checkInDate.getDate()
            return `${checkInMonth} ${checkInDay}`
        },
        formatCheckout() {
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

            return this.$store.getters.loggedinUser
        },
        isApproved() {
            if (this.order.status === 'approved') return true
            else if (this.status === 'rejected') return false
        },
        approve() {
            this.$store.dispatch({type: 'approveOrder', order: this.order})
        },
        reject() {
            this.$store.dispatch({type: 'rejectOrder', order: this.order})
        },
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>