<template>
  <section class="mini-search-cmp">
    <div class="filter">
      <span>{{ getCitySearched }}</span>
    </div>
    <div class="break-point"></div>
    <div class="filter date-input search-head">
      <span>{{ getDatesSearched }}</span>
    </div>
    <div class="break-point"></div>
    <div class="filter date-input search-sub">
      <span>{{getNumOfGuests}}</span>
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
 export default {
   name: 'search-stay',
   data() {
     return {
       shouldShow: false,
       filterBy: {
         txt: ''
       },
       tripDates: null,
       childrenCounter: 0,
       adultsCounter: 0
     };
   },
   computed: {
     getCitySearched() {
       const citySearched = this.$store.getters.getCitySearched
 
       if (!citySearched) return 'Anywhere'
       else return citySearched
     },
     getDatesSearched() {
       const chckInDate = this.$store.getters.getCurrChckInDate
       const chckOutDate = this.$store.getters.getCurrChckOutDate
       if (!chckInDate) return 'Any week'
       if (!chckOutDate) return 'Any week'
       const chckInDay = chckInDate.getDate()
       const chckOutDay = chckOutDate.getDate()
       const chckInMonth = chckInDate.toLocaleString('en-US', {
         month: 'short',
       })
       const chckOutMonth = chckOutDate.toLocaleString('en-US', {
         month: 'short'
       })
       if (chckInMonth === chckOutMonth) {
          return `${chckInMonth} ${chckInDay} - ${chckOutDay}`
       } else {
        return `${chckInMonth} ${chckInDay} - ${chckOutMonth} ${chckOutDay}`
       }
     },
     getNumOfGuests() {
      const adultsNum = this.$store.getters.getAdultsNum
      const childrenNum = this.$store.getters.getChildrenNum
      
      if (!adultsNum && !childrenNum) return 'Add guests'
      if (!childrenNum) return adultsNum + ' guests'
      if (!adultsNum) return childrenNum + ' guests'
      return adultsNum + childrenNum + ' guests'
     }
 
   },
   methods: {
   },
 }
 
 </script>