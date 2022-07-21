<template>
  <div @click="onClickStay(stay._id)">
  <!-- <el-carousel trigger="click" >
      <el-carousel-item v-for="img in stay.imgUrls" :key="img">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <img class="card-img" :src="stay.imgUrls[0]" />
    <div class="text-container">
    <span class="title">{{ stay.name }}</span>
    <p>{{ stay.loc.address }} • {{ stay.loc.country }}</p>
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
   created() { },
   methods: {
    onClickStay(stayId) {
       this.$router.push(`/stay/${stayId}`)
     }
   }
 }
 </script>
