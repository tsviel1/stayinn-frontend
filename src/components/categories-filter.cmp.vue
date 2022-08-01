<template>
  <section class="categories-container main-layout full" :class="{'shadow-bottom':!top}">
    <!-- <Carousel :settings="settings" :breakpoints="breakpoints"> -->
    <!-- <Slide v-for="slide in categories" :key="slide"> -->

    <!-- </Slide> -->
    <!-- <template #addons> -->
    <!-- <Navigation /> -->
    <!-- </template> -->
    <!-- </Carousel> -->
    <div class="main-categories">
      <category-preview :category="category" v-for="category in categories" />
    </div>

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
      },
      top: true
    };
  },
  computed: {
    isCategoriesTop() {
      return window.scrollY === 0
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY !== 0) {
        this.top = false
      } else {
        this.top = true
      }
    }
  },
  created() {
    this.categories = this.$store.getters.getCategories
    window.addEventListener("scroll", this.handleScroll)
  },
  components: {
    categoryPreview
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
};
</script>
 <style>
 </style>