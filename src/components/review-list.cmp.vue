<template>
  <section class="review-list">
    <h2 class="review-list-title">
      <img class="reviews-svg" src="../assets/svgs/star.svg">
      {{ getReviewAvg.toFixed(1) }} ·
      {{ reviewLength }} reviews

    </h2>
    <ul class=" reviews-container clean-list flex">
      <li v-for="(review, index) in formatedReviews" :key="index">
        <review-preview :review="review" />
      </li>
    </ul>
    <button v-if="reviewLength>=6"  @click="isMore=!isMore" class="review-btn">{{readText}}</button>
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
      reviewLength: null,
      isMore:false
    };
  },
  created() {
    this.reviewLength = this.stay.reviews.length
  },
  computed: {
    getReviewAvg() {
      return this.$store.getters.getCurrStayAvg
    },
    formatedReviews() {
      return this.isMore ? this.stay.reviews : this.stay.reviews.slice(0, 6)
    },
    readText() {
      return this.isMore ? ` Show less` : `Show all ${this.reviewLength} reviews`
    },
  },
};
</script>