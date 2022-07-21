<template>
  <section class="review-list">
    <h3>
      <i class="fas fa-star"></i> 
      {{ getReviewAvg }} Average .
      {{reviewLength}} reviews
    
    </h3>
    <ul class="clean-list" v-for="(r, index) in stay.reviews">
      <li>{{r.txt}}</li>
    </ul>
  </section>
</template>
 <script>
 export default {
 name: 'review-list',
 props: {
    stay: Object
 },
    components: {
      
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