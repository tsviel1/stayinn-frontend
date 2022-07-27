<template>
  <section class="preview-section" @click="onClickStay(stay._id)">
    <div>
      <el-carousel trigger="click" :autoplay="false" >
        <el-carousel-item trigger="click" :autoplay="false" v-for="img in stay.imgUrls" :key="img">
          <img class="card-img" :src="setupImgUrl(img)" />
        </el-carousel-item>
      </el-carousel>
      <div class="wishlist" @click.stop="isliked = !isliked">
       <heart-svg :class="{liked:isliked,unliked:!isliked}"/>
        <!-- <span v-if="isliked"><i class="fas fa-heart liked"></i></span>
        <span v-else><i class="fas fa-heart unliked"></i></span> -->
      </div>
      <div class="text-container">
        <div class="title"><span>{{ stay.propertyType }} in {{ stay.address.city }}</span>
          <div class="rating"><i class="fas fa-star"></i> {{ reviewsAvg }} ({{ stay.reviews.length }})</div>
        </div>
        <div>
          <p class="stay-summery">{{ stay.summary }}</p>
        </div>
        <p>{{ stay.beds }} {{ beds }}</p>
        <p><span class="price">${{ stay.price }} </span> night</p>
      </div>
    </div>
  </section>
</template>
 <script>
import { utilsService } from '../services/utils.service.js';
import heartSvg from './svg/heart-svg.cmp.vue'
 export default {
   name: 'stay-preview',
   components: {
    heartSvg
   },
   props: {
     stay: Object
   },
   data() {
     return {
       isliked: false
     };
   },
   created() {
 
   },
   methods: {
     onClickStay(stayId) {
       this.$router.push(`/stay/${stayId}`)
     },
     setupImgUrl(name) {
       return new URL(`../assets/Images/${name}`, import.meta.url).href;
     },
 
   },
   computed: {
     reviewsAvg() {
      //  const reviews = this.stay.reviews
      //  let sumRate = reviews.reduce((acc, currVal) => acc + currVal.rate, 0)
      //  let avg = sumRate / reviews.length
      //  var newAvg = avg.toFixed(1)
 
      return utilsService.calculateStayAvg(this.stay)
      //  return newAvg

     },
     beds() {
       const bedStr = this.stay.beds > 1 ? "beds" : "bed"
       return bedStr
 
     }
   }
 }
 </script>
