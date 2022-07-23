<template>
  <div @click="onClickStay(stay._id)">
  <!-- <el-carousel trigger="click" >
      <el-carousel-item v-for="img in stay.imgUrls" :key="img">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <img class="card-img" :src="stay.imgUrls[0]" />
    <div class="text-container">
    <div  class="title"><span>{{ stay.name }}</span><div><i class="fas fa-star"></i> {{reviewsAvg}}</div></div>
    <p>{{ stay.loc.address }} • {{ stay.loc.country }}</p>
    <p>{{stay.beds}} {{beds}}</p>
    <p ><span class="price">${{stay.price}} </span> / night</p>
    </div>
  </div>
</template>
 <script>
 export default {
   name: 'stay-preview',
   components: {},
   props: {
     stay: Object
   },
   data() {
     return {};
   },
   created() { 
    // console.log('See error', typeof this.stay.imgUrls[0])
   },
   methods: {
    onClickStay(stayId) {
       this.$router.push(`/stay/${stayId}`)
     }
   },
   computed:{
      reviewsAvg() {
            const reviews = this.stay.reviews
            let sumRate = reviews.reduce((acc, currVal) => acc + currVal.rate, 0)
            let avg = sumRate / reviews.length
            var newAvg=avg.toFixed(1)
            // console.log('newAvg',newAvg)

            return newAvg
        },
      beds(){
        const bedStr =this.stay.beds>1?"beds":"bed"
        return bedStr

        }
   }
 }
 </script>
