<template>
    <img :src="user.imgUrl" >
</template>

<script>
    export default {
        name: 'user-img', 
        props: {
            user: Object
        },
        data() {
        return {}
        },
        created() {},
        methods: {},
        computed: {},
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>