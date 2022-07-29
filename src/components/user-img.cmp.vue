<template>
    <img :src="order.by.imgUrl" >
</template>

<script>
    export default {
        name: 'user-img', 
        props: {
            order: Object
        },
        data() {
        return {}
        },
        created() {
            // console.log(this.order.by)
        },
        methods: {},
        computed: {},
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>