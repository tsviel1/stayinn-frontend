<template>
    <section v-if="user" class="order-preview">
        <div class="preview-inner flex">
            <div class="guest-details flex">
                <user-img class="guest-img" :order="order" />
                <div class="guest-details-inner flex">
                    <div class="guest-name-and-created flex column justify-between">
                        <h3 class="guest-name">{{ order.by.fullname }}</h3>
                        <h3 class="order-created-at">Reserved at: {{ formatCreatedAt }}</h3>
                    </div>
                    <div class="sub-title">
                        <span class="order-details">{{ order.guests.adults + order.guests.children }} guests <span>
                                |
                            </span></span>
                        <span class="order-details"> {{ getOrderDates }}</span>
                        <!-- <span class="order-details last">
                            <p class="last-details">{{ order.stay.address.street }} </p>
                        </span> -->
                    </div>
                    <div class="place-info"> Your <span>{{ order.stay.propertyType }} </span> in
                        {{ order.stay.address.street }}
                    </div>
                </div>
            </div>
            <div class="buttons" v-if="order.status === 'pending'">
                <el-button @click="approve" type="success" plain>Approve</el-button>
                <el-button @click="reject" type="danger" plain>Reject</el-button>
            </div>
            <div v-else :class="{ 'green': isApproved, 'red': !isApproved }" class="status flex">
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
    methods: {
        approve() {
            const newOrder = JSON.parse(JSON.stringify(this.order))
            newOrder.status = 'approved'
            this.$store.dispatch({ type: 'approveOrder', order: newOrder })
        },
        reject() {
            const newOrder = JSON.parse(JSON.stringify(this.order))
            newOrder.status = 'rejected'
            this.$store.dispatch({ type: 'rejectOrder', order: newOrder })
        },
    },
    computed: {
        getOrderDates() {
            const checkInDate = new Date(this.order.chckInDate)
            const checkInMonth = checkInDate.toLocaleString('en-US', {
                month: 'short',
            })
            const checkInDay = checkInDate.getDate()
            const checkOutDate = new Date(this.order.chckOutDate)
            const checkOutMonth = checkOutDate.toLocaleString('en-US', {
                month: 'short',
            })
            const checkOutDay = checkOutDate.getDate()
            if (checkInMonth === checkOutMonth) {
                return `${checkInMonth} ${checkInDay} - ${checkOutDay}`
            } else {
                return `${checkInMonth} ${checkInDay} - ${checkOutMonth} ${checkOutDay}`
            }
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
            else if (this.order.status === 'rejected') return false
        },

    },
}

</script>

<style lang="scss" scoped>

</style>