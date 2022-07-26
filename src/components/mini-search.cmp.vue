<template>
  <section class="mini-search-cmp">
    <div class="filter">
      <span>{{getCitySearched}}</span>
    </div>
    <div class="break-point"></div>
    <div class="filter date-input search-head">
      <span>Any week</span>
    </div>
    <div class="break-point"></div>
    <div class="filter date-input search-sub">
      <span>Add guests</span>
    </div>
    <div class="search-btn" @click="searchTrip">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
        focusable="false"
        style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
        <g fill="none">
          <path
            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
          </path>
        </g>
      </svg>
    </div>
  </section>
</template>
 <script>
import { dataType } from 'element-plus/lib/components/table-v2/src/common';
import calenderCmp from './calender.cmp.vue'
export default {
  name: 'search-stay',
  data() {
    return {
      shouldShow: false,
      filterBy: {
        txt: ''
      },
      tripDates: null,
      kidsCounter: 0,
      adultsCounter: 0
    };
  },
  computed: {
    getCitySearched() {
      const citySearched = this.$store.getters.getCitySearched
      console.log('citySearched', citySearched)
      
      if (!citySearched) return 'Anywhere'
      else return citySearched
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
      console.log('trip is searched');
    },
  },
  components: {
    calenderCmp,
  },
}

</script>
 <style>
 </style>