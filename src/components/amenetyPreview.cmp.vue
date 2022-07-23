<template>
    <section class="amenety-preview ">
            <div class="amenety-list-item ">
                <i :class="`${icons[amenety]} amenety-icon`"></i>
                <span class="amenety-span">{{ amenety }} </span> 
            </div>
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