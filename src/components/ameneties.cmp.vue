<template>
    <section class="ameneties">
        <h2 class="ameneties-title">What this place offers</h2>
        <ul class="ameneties-list clean-list">
            <li class="amenety-preview" v-for="(amenety, index) in stay.amenities">
                <amenety-preview :amenety="amenety" />
            </li>
        </ul>
    </section>
</template>

<script>
import { amenitiesMap } from '../services/data/amenties-map.js'
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
            icons: amenitiesMap
        }
    }
}
</script>