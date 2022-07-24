<template>
  <section class="search-cmp">
    <form @submit.prevent="searchTrip" class="search-container">
      <div class="filter">
        <label for="place">Where</label>
        <input id="place" class="text-input" v-model="filterBy.txt" @input="setTripCity" placeholder="Anywhere" />
      </div>
      <div class="break-point"></div>
      <label>
        <label class="filter date-input" for="checkIn">Check out
          <div v-if="checkIn">{{ checkIn }}</div>
        </label>
        <div class="break-point"></div>
        <label class="filter date-input" for="checkOut">Check in
          <div v-if="checkOut">{{ checkOut }}</div>
        </label>
        <div class="break-point"></div>
        <el-date-picker class="date-picker" v-model="tripDates" type="daterange" @change="setTripDates"
          range-separator="To" start-placeholder="Start date" end-placeholder="End date" />
      </label>
      <label class="guests-filter filter" for="guests">Who
        <div id="guests" class="add-guests" @click="shouldShow = !shouldShow">Add guests</div>
      </label>
      <div class="search-btn" @click="searchTrip"><i class="fas fa-search srch-logo"></i></div>
    </form>
    <div v-if="shouldShow" class="position-modal">
      <div class="guests-modal">
        <section>
          <div class="guests-type">
            <div class="guests-type-view">
              <div class="title">
                Adults
              </div>
              <div class="second-title">
                Ages 13 or above
              </div>
            </div>
            <div class="guests-type-selection">
              <button :disabled="adultsCounter <= 0" class="btn-round" @click="adultsCounter--">-</button>
              <span>{{ adultsCounter }}</span>
              <button :disabled="adultsCounter >= 10" class="btn-round" @click="adultsCounter++">+</button>
            </div>
          </div>
          <div class="guests-type">
            <div class="guests-type-view">
              <div class="title">
                Children
              </div>
              <div class="second-title">
                Ages 2-12
              </div>
            </div>
            <div class="guests-type-selection">
              <button :disabled="kidsCounter <= 0" class="btn-round" @click="kidsCounter--">-</button>
              <span>{{ kidsCounter }}</span>
              <button :disabled="kidsCounter >= 10" class="btn-round" @click="kidsCounter++">+</button>
            </div>
          </div>
        </section>
      </div>
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
      checkIn: 'Add dates',
      checkOut: 'Add dates',
      tripDates: null,
      kidsCounter: 0,
      adultsCounter: 0
    };
  },
  computed: {

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