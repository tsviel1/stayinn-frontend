<template>
    <section class="back-office"  v-if="orders">
        <!-- <pre>{{ getOrders }}</pre> -->
        <h1>Pending Orders</h1>
        <ul class="orders-list clean-list">
            <li  v-for="(order) in orders" :key="order._id" >
                <order-preview :order="order"  />
            </li>
        </ul>
    </section>
</template>

<script>
    import orderPreview from '../components/orderPreview.cmp.vue'

    export default {
        name: 'back-office',
        components: {
            orderPreview,
        },
        data() {
        return {
            
        }
        },
        created() {
            this.$store.dispatch({type: 'loadOrders'})
            
        },
        methods: {},
        computed: {
            orders() {
                return this.$store.getters.getOrders
            },
            
        },
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>