<template>
  <section class="review-list">
    <h3>
      <font-awesome-icon icon="fas fa-star" />
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
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>