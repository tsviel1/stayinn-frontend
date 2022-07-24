<template>
  <section class="categories-container">
    <button class="btn-category" v-for="category in categories">
        <img :src="setupImgUrl(category)" class="flex" />
        <span>{{ category }}</span>

    </button>
  </section>

</template>
 <script>
import { tagBank } from '../services/data/airbnb.js';

export default {
  name: 'categories-filter',
  components: {
  },
  data() {
    return {
      categories: tagBank
    };
  },
  created() {
    // console.log(this.categories)
  },
  methods: {
    setupImgUrl(name) {
      return new URL(`../assets/categories/${name}.jpg`, import.meta.url).href;
    },
  },
  computed: {},
  unmounted() { },
};
</script>
 <style>
 </style>