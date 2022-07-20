<template>
    <section>
        <el-card shadow="always">
            <p><span>{{stay.price}} $</span> night</p>
        </el-card>
    </section>
</template>

<script>
    export default {
        name: 'stay-reserve',
        props: {
            stay: Object
        },
        components: {

        },
        data() {
        return {

        }
        },
        created() {
            console.log(this.stay)
        },
        methods: {},
        computed: {},
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>