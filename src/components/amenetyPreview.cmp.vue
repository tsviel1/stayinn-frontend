<template>
<<<<<<< HEAD
    <section class="amenety-preview ">
            <div class="amenety-list-item ">
                <i :class="`${icons[amenety]} amenety-icon`"></i>
                <span class="amenety-span">{{ amenety }} </span> 
            </div>
=======
    <section class="amenety-preview">
        <li><i :class="`${icons[amenety]}`"></i> {{ amenety }}</li>
>>>>>>> d79338cc259b8d1da7c43899c80bfc78dd24ce84
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