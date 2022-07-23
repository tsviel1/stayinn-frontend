<template>
  <section class="search-cmp">
    <div class="search-container">
      <div class="filter">
        <input type="search" v-model="filterBy.txt" @input="setFilterBy" placeholder="Anywhere" />
      </div>
      <div class="break-point"></div>
      <label>
        <div class="filter">Check in</div>
        <div class="break-point"></div>
        <div class="filter">Check out</div>
        <div class="break-point"></div>
        <el-date-picker class="date-picker" v-model="tripDates" type="daterange" @change="setTrip" range-separator="To"
          start-placeholder="Start date" end-placeholder="End date" />
      </label>
      <div class="filter add-guests" @click="shouldShow = !shouldShow">Add guests</div>
      <div class="search-btn"><i class="fas fa-search"></i></div>
    </div>
    <div class="position-modal">
      <div class="guests-modal">
        <section>
          <div class="guests-type">
            <div class="guests-type-view">
              <div>
                Adults
              </div>
              <div>
                Ages 13 or above
              </div>
            </div>
            <div class="guests-type-selection">
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>
          </div>
        </section>
      </div>
    </div>



  </section>
</template>
 <script>
import calenderCmp from './calender.cmp.vue'
export default {
  name: 'search-stay',
  data() {
    return {
      shouldShow: false,
      filterBy: {
        txt: ''
      },
      tripDates: null
    };
  },
  methods: {
    setFilterBy() {
      this.$emit('setFilterBy', { ...this.filterBy })
    },
    setTrip() {
      const startDate = this.tripDates[0].toLocaleDateString()
      const endDate = this.tripDates[1].toLocaleDateString()

      this.$emit('setTripDates', startDate, endDate)
    }
  },
  components: {
    calenderCmp,
  },
};
</script>
 <style>
 </style>