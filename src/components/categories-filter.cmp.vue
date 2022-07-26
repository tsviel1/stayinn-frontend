<template>
  <section class="categories-container">
    <!-- <Carousel :settings="settings" :breakpoints="breakpoints"> -->
      <!-- <Slide v-for="slide in categories" :key="slide"> -->

      <!-- </Slide> -->
      <!-- <template #addons> -->
        <!-- <Navigation /> -->
      <!-- </template> -->
    <!-- </Carousel> -->
        <category-preview :category="category" v-for="category in categories" />
  </section>
</template>
 <script>
import categoryPreview from './category-preview.cmp.vue'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'



export default {
  name: 'categories-filter',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      categories: null,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
      }
    };
  },
  methods: {
  },
  created() {
    this.categories = this.$store.getters.getCategories
  },
  components: {
    categoryPreview
  }
};
</script>
 <style>
 </style>