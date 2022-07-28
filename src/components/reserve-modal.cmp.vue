<template>
  <section>
    <div class="reserve-modal">
      <h1 class="modal-title">Confirmation</h1>
      <div class="modal-container">
        <div class="rigth-side">
          <div class="rare-find">
            <div class="rare-details">
              <p> This is a rare find.</p>
              <!-- <modal-svg /> -->
            </div>
            <div class="rare-host">{{ stay.host.fullname }}'s place is usually booked.</div>
          </div>
          <div class="trip-details">
            <div>
              <h4>Your Trip</h4>
              <div class="flex justify-between">
                <p class="trip-title">Dates</p>
                <p>{{ startDate }}-{{ endDate }}</p>
              </div>
            </div>
            <div class="flex justify-between border">
              <p class="trip-title">Guests</p>
              <p>{{ getGeusts }} guests</p>
            </div>
          </div>
        </div>
        <div class="order-container">
          <div>
            <div class="flex order border">
              <img :src="setupImgUrl(stay.imgUrls[0])" alt="">
              <div class="flex justify-between details-card">
                <div>
                  <p class="details type">{{ stay.propertyType }}</p>
                  <p class="details">{{ stay.name }}</p>
                </div>
                <p class="details reviews"><i class="fas fa-star"></i> {{ reviewsAvg }} <span> ({{ stay.reviews.length
                }} reviews)</span></p>
              </div>
            </div>
          </div>
          <div>
            <h1 class="price-details">Price details</h1>
            <order-calc-section />
          </div>
        </div>
      </div>
      <button @click="onCloseModal" class="close-btn">Approve</button>
    </div>
  </section>
</template>
 <script>
 import orderCalcSection from './order-calc.cmp.vue'
 export default {
   name: 'reserve-modal',
   components: {
     orderCalcSection
   },
   props: {
     stay: Object
   },
   methods: {
     setupImgUrl(name) {
       return new URL(`../assets/Images/${name}`, import.meta.url).href;
     },
   },
   computed: {
     startDate() {
       const checkInDate = this.$store.getters.getCurrChckInDate
       this.checkIn = checkInDate
       if (checkInDate) {
         const checkInMonth = checkInDate.toLocaleString('en-US', {
           month: 'short',
         })
         const checkInDay = checkInDate.getDate()
         return `${checkInMonth} ${checkInDay}`
       }
 
     },
     endDate() {
       const checkOutDate = this.$store.getters.getCurrChckOutDate
       this.checkOut = checkOutDate
 
       if (checkOutDate) {
         const checkOutMonth = checkOutDate.toLocaleString('en-US', {
           month: 'short',
         })
         const checkOutDay = checkOutDate.getDate()
         return `${checkOutMonth} ${checkOutDay}`
       }
 
     },
     getGeusts() {
       const guests = this.$store.getters.getGuests
       this.currGuests = guests
       const guestsSum = guests.adults + guests.children
       return guestsSum
 
     },
     onCloseModal() {
       this.$emit('onCloseModal')
     },
     reviewsAvg() {
       return this.$store.getters.getCurrStayAvg
     }
   },
 
 
 };
 </script>
