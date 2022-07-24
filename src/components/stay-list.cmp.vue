<template>
  <section v-if="stays">
    <ul class="card-layout">
      <li class="card-container " v-for="stay in stays" :key="stay._id"  >
        <stay-preview :stay="stay" />
      </li>
    </ul>

  </section>

</template>
 <script>
import stayPreview from './stay-preview.cmp.vue';
export default {
  name: 'stay-list',
  props: {
    stays: {
      type: Array,
      required: true
    },
  },
  components: {
    stayPreview
  },
 computed: {
  
 },
};
</script>
 <style>
 </style>
