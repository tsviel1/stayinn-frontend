<template>
  <section v-if="stay" class="stay-details container">
    <a @click="onClickStay">Back</a>
    <stay-details-heading :stay="stay" />
    <div class="two-sections flex">
      <div class="first-section">
        <div class="flex-type flex">
          <div class="type-heading">
            <h2 class="type-heading-title">{{ stay.propertyType }} hosted by {{ stay.host.fullname }}</h2>
            <ul class="capacities clean-list flex">
              <li>{{ stay.capacity }}<span> guests</span></li>
              <li><span class="dot2">·</span><span>{{ stay.bedrooms }} bedrooms</span></li>
              <li><span class="dot2">·</span>{{ stay.beds }}<span> beds</span> </li>
            </ul>
          </div>
          <img class="type-heading-img" :src="stay.host.imgUrl" />
        </div>

        <hr />
        <p class="stay-details-desc">{{ stay.summary }}</p>
        <ameneties :stay="stay" />
      </div>
      <div class="second-section">
        <stay-reserve :stay="stay" />
      </div>
    </div>





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
    const newStayId = JSON.parse(JSON.stringify(this.stayId))
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