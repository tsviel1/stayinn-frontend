<template>
    <section class="ameneties">
        <h3>What this place offers</h3>
        <ul class="clean-list" v-for="(amenety, index) in stay.amenities">
            <amenety-preview :amenety="amenety" />
            
        </ul>
        <hr/>
    </section>
</template>

<script>
    import {amentiesMap} from '../services/data/amenties-map.js'
    import amenetyPreview from './amenetyPreview.cmp.vue'

    export default {
        name: 'ameneties',
        components: {
            amenetyPreview
        },
        props: {
            stay: Object
        },
        data() {
        return {
            icons: amentiesMap
        }
        },
        created() {
            // console.log(this.stay.amenities[0])
            // console.log(amentiesMap["Air conditioning"])
        },
        methods: {},
        computed: {
            
        },
        unmounted() {},

    }
</script>

<style lang="scss" scoped>

</style>