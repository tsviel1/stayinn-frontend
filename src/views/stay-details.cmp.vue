<template>
    <section v-if="stay" class="stay-details">
      <h3>{{ stay.name }}</h3>
      <div class="flex">
        <p>{{stay.capacity}}<span> guests</span> .</p>
        <p>{{stay.bedrooms}}<span> bedroom</span> .</p>
        <p>{{stay.beds}}<span> beds</span> </p>
      </div>
      <p>{{stay.summary}}</p>
      <stay-reserve :stay="stay" />

      <ameneties :stay="stay" />

      <review-list :stay="stay"  />
    </section>
</template>
 <script>
import stayReserve from '../components/stay-reserve.cmp.vue';
import ameneties from './ameneties.cmp.vue';
import reviewList from '../components/review-list.cmp.vue'; 
 
 export default {

 name: 'stay-details',
    components: {
      stayReserve,
      ameneties,
      reviewList
    },
  data() {
   return {
    stayId: this.$route.params.id,
    // stay: null
   };
    },
  created() {
    console.log('STAY ID', this.stayId)
    const newStayId = JSON.parse(JSON.stringify(this.stayId))
    console.log(newStayId)
    // this.$store.commit({type: 'setCurrStayId', stayId: newStayId} )
    this.$store.dispatch({ type: 'getCurrStay', stayId: newStayId })
  },
 methods: {},
 computed: {
  stay() {
    
    return this.$store.getters.getCurrStay
  }
 },
 unmounted() {},
  };
  </script>
 <style></style>