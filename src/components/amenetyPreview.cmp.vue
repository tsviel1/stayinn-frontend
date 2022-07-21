<template>
    <section class="amenety-preview">
        <li><i :class="`${icons[amenety]}`"></i>  {{ amenety }}</li>
    </section>
</template>

<script>
    import {amentiesMap} from '../services/data/amenties-map.js'

    export default {
        name: 'ameneties',
        props: {
            amenety: String
        },
        data() {
        return {
            icons: amentiesMap
        }
        },
        created() {
            // console.log(this.amenety)
        },
        methods: {},
        computed: {},
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>