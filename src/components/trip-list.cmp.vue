<template>
  <section class="trip-list" v-if="trips">
    <ul class="clean-list">
      <li v-for="trip in trips" :key="trip._id"  >
        <trip-preview :trip="trip" />
      </li>
    </ul>

  </section>

</template>
 <script>
import tripPreview from './trip-preview.cmp.vue';
export default {
  name: 'trip-list',
  props: {
    trips: {
      type: Array,
      required: true
    },
  },
  components: {
    tripPreview
  },
};
</script>
 <style>
 </style>
