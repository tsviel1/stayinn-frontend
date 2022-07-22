<template>
    <section v-if="stay">
        <h2>Where you'll be</h2>
        <p>{{ stay.loc.city }},{{ stay.loc.address }},{{ stay.loc.country }}</p>
        <GMapMap :center="position" :zoom="12" map-type-id="terrain" style="width: 800px; height: 800px">
            <GMapCluster>
                <GMapMarker :key="stay._id" :position="position" :clickable="true" @click="center = position" />
            </GMapCluster>
        </GMapMap>
    </section>
</template>
 <script>
export default {
    name: 'map-cmp',
    components: {},
    data() {
        return {};
    },
    props: {
        stay: Object
    },
    created() { },
    methods: {},
    computed: {
        position() {
            console.log(this.stay);
            const pos = {
                lat: +this.stay.loc.lat,
                lng: +this.stay.loc.lan
            }
            return pos
        }
    },
    unmounted() { },
};
</script>
 <style>
 </style>