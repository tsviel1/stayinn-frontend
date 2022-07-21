<template>
    <section class="ameneties">
        <h3>What this place offers</h3>
        <ul class="clean-list" v-for="(amenity, index) in stay.amenities">
            
            <li><i :class="`${icons[amenity]}`"></i>  {{ amenity }}</li>
        </ul>
    </section>
</template>

<script>
    import {amentiesMap} from '../services/data/amenties-map.js'


    export default {
        name: 'ameneties',
        props: {
            stay: Object
        },
        data() {
        return {
            icons: amentiesMap
        }
        },
        created() {
            console.log(this.stay.amenities[0])
            console.log(amentiesMap["Air conditioning"])
        },
        methods: {},
        computed: {
            getIcons() {
                
            }
        },
        unmounted() {},

    }
</script>

<style lang="scss" scoped>

</style>