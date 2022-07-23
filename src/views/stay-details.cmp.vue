<template>
  <section v-if="stay" class="stay-details container">
    <a @click="onClickStay">Back</a>
    <stay-details-heading :stay="stay" />

    <!-- <div class="details-img-gallery flex" v-for="img in stay.imgUrls"> 
        <pre>{{img}}</pre>
        <img :src="img" />
      </div>  -->
    <div class="flex-type flex">
      <div class="type-heading">
        <h2 class="type-heading-title">{{ stay.propertyType }} hosted by {{ stay.host.fullname }}</h2>
        <ul class="capacities clean-list flex">
          <li>{{ stay.capacity }}<span> guests</span> .</li>
          <li>{{ stay.bedrooms }}<span> bedroom</span> .</li>
          <li>{{ stay.beds }}<span> beds</span> </li>
        </ul>
      </div>
      <img class="type-heading-img" :src="stay.host.imgUrl" />

   
    </div>

    <p class="stay-details-desc">{{ stay.summary }}</p>
    <hr />

    <stay-reserve :stay="stay" />

    <ameneties :stay="stay" />
    <review-list :stay="stay" />
    <mini-host-preview :stay="stay" />
  </section>
</template>
 <script>
import stayReserve from '../components/stay-reserve.cmp.vue';
import ameneties from '../components/ameneties.cmp.vue';
import reviewList from '../components/review-list.cmp.vue';
import miniHostPreview from '../components/mini-hostPreview.cmp.vue';
 import mapCmp from '../components/map.cmp.vue'
import stayDetailsHeading from '../components/stay-details-heading.cmp.vue'


export default {

 name: 'stay-details',
    components: {
      stayReserve,
      ameneties,
      reviewList,
      miniHostPreview,
      mapCmp,
      stayDetailsHeading,
    },
  data() {
    return {
      stayId: this.$route.params.id,
      // stay: null
      orderInfo: ''
    };
  },
  created() {
    console.log('STAY ID', this.stayId)
    const newStayId = JSON.parse(JSON.stringify(this.stayId))
    console.log(newStayId)
    // this.$store.commit({type: 'setCurrStayId', stayId: newStayId} )
    this.$store.dispatch({ type: 'getCurrStay', stayId: newStayId })
  },
  methods: {
    onClickStay(filterBy) {
      this.$router.push(`/explore/${filterBy}`)
    }
  },
  computed: {
    stay() {

      return this.$store.getters.getCurrStay
    },
    getAvgReviews() {
      return this.$store.getters.getCurrStayAvg
    },
    getReviewsAmount() {
      return this.$store.getters.getReviewsLength
    }
  },
  unmounted() { },
};
</script>
 <style>
 </style>