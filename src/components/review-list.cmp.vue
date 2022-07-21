<template>
  <section class="review-list">
    <h3>
      <i class="fas fa-star"></i> 
      {{ getReviewAvg }} Average .
      {{reviewLength}} reviews
    
    </h3>
    <ul class="clean-list" v-for="(review, index) in stay.reviews">
      <review-preview :review="review" />
      
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
    let sumRate = this.stay.reviews.reduce((acc, currVal) => acc + currVal.rate, 0)
    let avg = sumRate / this.reviewLength
    return avg
  }
 },
 unmounted() {},
  };
  </script>
 <style></style>