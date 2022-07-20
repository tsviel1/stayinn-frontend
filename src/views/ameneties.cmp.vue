<template>
    <section class="ameneties">
        <h3>What this place offers</h3>
        <ul class="clean-list" v-for="(a, index) in stay.amenities">
            <li>{{ a }}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'ameneties',
        props: {
            stay: Object
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