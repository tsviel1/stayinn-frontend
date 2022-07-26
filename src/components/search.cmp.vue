<template>
  <section class="container" :class="{'search-cmp-big': getCurrSearch, 'search-cmp': !getCurrSearch}">
    <form @submit.prevent="searchTrip" class="search-container">
      <div class="search-first-section search-section">
        <label for="place" class="search-head">Where</label>
        <input id="place" class="text-input" v-model="filterBy.txt" @input="setTripCity"
          placeholder="Search destinations" />
      </div>
      <div class="break-point"></div>
      <chck-in />
      <div class="break-point"></div>
      <div class="search-last-section">
        <div class="search-section">
          <div class="search-head">Who</div>
          <div id="guests" class="add-guests search-sub" @click="shouldShow = !shouldShow">Add guests</div>
        </div>
        <div class="search-btn-section" @click="searchTrip">
          <div class="search-btn">
            <search-svg class="search-svg" />
          </div>
        </div>
      </div>
    </form>
    <div class="position-modal">
      <guests-modal v-if="shouldShow" />
    </div>
  </section>
</template>
 <script>
import calenderCmp from './calender.cmp.vue'
import chckIn from './chck-in.cmp.vue'
import guestsModal from "./guests-modal.cmp.vue"
import searchSvg from "./svg/search-svg.vue"
export default {
  name: 'search-stay',
  data() {
    return {
      filterBy: {
        txt: ''
      },
      tripDates: null,
      shouldShow: false,
      shouldShowSearch: false
    };
  },
  computed: {
    getCurrSearch() {
      console.log('this.$store.getters.currSearch', this.$store.getters.currSearch)
      
      return this.$store.getters.getSearch
    }
  },
  methods: {
    setTripCity() {
      // filter stays
      this.$emit('setFilterBy', { ...this.filterBy })
      // save trip settings
      this.$emit('setTripCity', { ...this.filterBy })
    },
    setTripDates() {
      const startDate = this.tripDates[0].toLocaleDateString()
      const endDate = this.tripDates[1].toLocaleDateString()
      const checkInDate = this.tripDates[0]
      console.log(checkInDate);
      checkInDate.setMonth(checkInDate.getMonth())
      const checkInMonth = checkInDate.toLocaleString('en-US', {
        month: 'short',
      })
      const checkInDay = checkInDate.getDate()
      this.checkIn = `${checkInMonth} ${checkInDay}`
      const checkOutDate = this.tripDates[1]
      checkOutDate.setMonth(checkOutDate.getMonth())
      const checkOutMonth = checkOutDate.toLocaleString('en-US', {
        month: 'short',
      })
      const checkOutDay = checkOutDate.getDate()
      this.checkOut = `${checkOutMonth} ${checkOutDay}`

      this.$emit('setTripDates', startDate, endDate)
    },
    searchTrip() {
      this.$emit('searchClicked')
      this.shouldShow = false
      this.$store.commit('toggleSearchBig')
      console.log('trip is searched');
    },
  },
  components: {
    calenderCmp,
    chckIn,
    guestsModal,
    searchSvg
  },
}

</script>
