<template>
  <section class="container" :class="{ 'search-cmp-big': getCurrSearch, 'search-cmp': !getCurrSearch }">
    <form @submit.prevent="searchTrip" class="search-container">
      <div class="search-first-section search-section">
        <label for="place" class="search-head">Where</label>
        <input id="place" class="text-input" v-model="filterBy.txt" @keyup.enter="searchTrip"
          placeholder="Search destinations" />
      </div>
      <div class="break-point"></div>
      <div class="chck-in">
        <label class="search-middle-section">
          <div class="search-section">
            <div class="search-head">Check in</div>
            <div class="search-sub">{{ getCurrChckInDate }}</div>
          </div>
          <div class="break-point"></div>
          <div class="search-section">
            <div class="search-head">Check out</div>
            <div class="search-sub">{{ getCurrChckOutDate }}</div>
          </div>
          <el-date-picker class="date-picker-container" v-model="tripDates" type="daterange" @change="setTripDates"
            range-separator="To" start-placeholder="Start date" end-placeholder="End date" />
        </label>
      </div>
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
      shouldShowSearch: false,

    };
  },
  computed: {
    getCurrSearch() {
      return this.$store.getters.getSearch
    },
    getCurrChckInDate() {
      const chckInDate = this.$store.getters.getCurrChckInDate
      if (!chckInDate) return 'Add dates'
      const chckInMonth = chckInDate.toLocaleString('en-US', {
        month: 'short',
      })
      const chckInDay = chckInDate.getDate()
      return `${chckInMonth} ${chckInDay}`

    },
    getCurrChckOutDate() {
      const chckOutDate = this.$store.getters.getCurrChckOutDate
      if (!chckOutDate) return 'Add dates'
      const chckOutMonth = chckOutDate.toLocaleString('en-US', {
        month: 'short',
      })
      const chckOutDay = chckOutDate.getDate()
      return `${chckOutMonth} ${chckOutDay}`
    }
  },
  methods: {
    setTripDates() {
      const chckInDate = this.tripDates[0]
      const chckOutDate = this.tripDates[1]
      this.$emit('setTripDates', chckInDate, chckOutDate)
    },
    searchTrip() {
      // filter stays
      this.$emit('setFilterBy', { ...this.filterBy })
      // save trip settings
      this.$emit('setTripCity', { ...this.filterBy })
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
 <style>
 .date-picker-container {
   z-index: 1 !important;
   position: absolute !important;
   opacity: 0 !important;
   width: 270px !important;
 }
 
 .el-date-table td.available:hover {
   color: black !important;
 }
 
 
 .start-date.in-range .el-date-table-cell .el-date-table-cell__text {
   background: black;
 }
 
 .end-date.in-range .el-date-table-cell .el-date-table-cell__text {
   background: black;
 }
 </style>
