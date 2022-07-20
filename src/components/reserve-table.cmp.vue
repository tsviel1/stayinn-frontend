<template>
    <section class="reserve-table">
        <el-table></el-table>
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
        created() {
       
        },
        methods: {},
        computed: {},
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>