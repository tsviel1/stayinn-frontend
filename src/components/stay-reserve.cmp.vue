<template>
    <section>
        <el-card shadow="always">
            <p><span>{{stay.price}} $</span> night</p>
            <reserve-table :stay="stay" />
        </el-card>
    </section>
</template>

<script>
    import reserveTable from './reserve-table.cmp.vue'

    export default {
        name: 'stay-reserve',
        props: {
            stay: Object
        },
        components: {
            reserveTable
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