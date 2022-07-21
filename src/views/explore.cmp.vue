<template>
<section class="explore-app container">
  <stay-filter />
  <stay-list />
  </section>
</template>
 <script>
import stayFilter from '../components/stay-filter.cmp.vue';
import stayList from '../components/stay-list.cmp.vue';
export default {
  name: 'explore',
  components: {
    stayFilter,
    stayList
  },
  data() {
    return {};
  },
  created() { },
  methods: {},
  computed: {},
  unmounted() { },
};
</script>
 <style>
 </style>