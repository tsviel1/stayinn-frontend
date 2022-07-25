<template>
  <section class="review-list">
    <h2 class="review-list-title">
      <i class="fas fa-star"></i>
      {{ getReviewAvg }} ·
      {{ reviewLength }} reviews

    </h2>
    <ul class=" reviews-container clean-list flex" >
      <li v-for="(review, index) in stay.reviews" :key="index">
        <review-preview :review="review" />
      </li>
    </ul>
  </section>
</template>
 <script>
import reviewPreview from './review-preview.cmp.vue';

export default {
  name: 'review-list',
  props: {
    stay: Object
  },
  components: {
    reviewPreview
  },
  data() {
    return {
      reviewLength: null
    };
  },
  created() {
    // console.log(this.stay)
    this.reviewLength = this.stay.reviews.length
  },
  methods: {},
  computed: {
    getReviewAvg() {
      return this.$store.getters.getCurrStayAvg
    }
  },
  unmounted() { },
};
</script>
 <style>
 </style>