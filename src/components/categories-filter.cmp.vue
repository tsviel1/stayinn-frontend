<template>
  <section class="categories-container">

        <category-preview :category="category" v-for="category in categories" />

  </section>

</template>
 <script>
import { tagBank } from '../services/data/airbnb.js';
import categoryPreview from './category-preview.cmp.vue'

export default {

  name: 'categories-filter',
  components: {
  },
  data() {
    return {
      categories: tagBank
    };
  },
  methods: {

  },
  components: {
    categoryPreview
  }
};
</script>
 <style>
 </style>