<template>
  <div @click="onClickStay(stay._id)">
    <img class="card-img" :src="stay.imgUrls[0]" />
    <span>{{ stay.name }}</span>
    <div>{{ stay.loc.address }} • {{ stay.loc.country }}</div>
    <div>{{stay.price}} / Night</div>
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
