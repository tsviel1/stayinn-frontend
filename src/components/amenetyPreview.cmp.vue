<template>
    <section class="amenety-preview ">
            <div class="amenety-list-item ">
                <img class="amenity-img" :src="setupImgUrl(icons[amenety])" /> 
                
                <span class="amenety-span">{{ amenety }} </span> 
            </div>
    </section>
</template>

<script>
    import {amenitiesMap} from '../services/data/amenties-map.js'

    export default {
        name: 'ameneties',
        props: {
            amenety: String
        },
        data() {
        return {
            icons: amenitiesMap
        }
        },
        created() {
            // console.log(this.amenety)
        },
        methods: {
            setupImgUrl(name) {
            return new URL(`../assets/svgs/${name}.svg`, import.meta.url).href;
        },
        },
        computed: {},
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>