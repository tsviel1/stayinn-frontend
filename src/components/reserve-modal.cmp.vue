<template>
  <section>
    <div class="reserve-modal">
      <h1 class="modal-title">Confirmation</h1>
      <div class="modal-container">
        <div class="left-side">
          <div class="rare-find">
            <div class="rare-details">
              <p> This is a rare find.</p>
              <modal-svg />
            </div>
            <div class="rare-host">{{ stay.host.fullname }}'s place is usually booked.</div>
          </div>
          <div class="trip-details">
            <div>
              <h4>Your Trip</h4>
              <div class="flex justify-between">
                <p class="trip-title">Dates</p>
                <p>{{ getDates }}</p>
              </div>
            </div>
            <div class="flex justify-between border">
              <p class="trip-title">Guests</p>
              <p>{{ getGeusts }}</p>
            </div>
          </div>
          <div class="price-section-mq">
            <h1 class="price-details">Price details</h1>
            <order-calc-section />
          </div>
          <div class="btn-div">
            <button @click="onApproveOrder" class="approve-btn">Approve</button>
            <div @click="onCloseModal" class="btn-grey">Close</div>
          </div>
        </div>
        <div class="order-container">
          <div class="place">
            <div class="flex order border">
              <img :src="setupImgUrl(stay.imgUrls[0])" alt="">
              <div class="flex justify-between details-card">
                <div>
                  <p class="details type">{{ stay.propertyType }}</p>
                  <p class="details">{{ stay.name }}</p>
                </div>
                <p class="details reviews"><img src="../assets/svgs/star.svg"> {{ reviewsAvg }} <span> ({{ stay.reviews.length
                }} reviews)</span></p>
              </div>
            </div>
          </div>
          <div class="price-section">
            <h1 class="price-details">Price details</h1>
            <order-calc-section />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 <script>
 import orderCalcSection from './order-calc.cmp.vue'
 import modalSvg from './svg/reserve-modal-svg.vue'
 export default {
   name: 'reserve-modal',
   components: {
     orderCalcSection,
     modalSvg
   },
   props: {
     stay: Object
   },
   methods: {
     setupImgUrl(name) {
       return new URL(`../asset/Images/${name}`, import.meta.url).href;
     },
     onApproveOrder() {
       this.$store.dispatch({ type: 'saveOrder' })
       this.$emit('onApproveOrder')
     }
   },
   computed: {
     getDates() {
       const chckInDate = this.$store.getters.getCurrChckInDate
       const chckOutDate = this.$store.getters.getCurrChckOutDate
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
     startDate() {
       console.log('yoo');
       const checkInDate = this.$store.getters.getCurrChckInDate
       this.checkIn = checkInDate
       if (checkInDate) {
         const checkInMonth = checkInDate.toLocaleString('en-US', {
           month: 'short',
         })
         const checkInDay = checkInDate.getDate()
         console.log(checkInMonth);
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
       if (guestsSum === 1) return '1 guest'
       else return guestsSum + ' guests'
 
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
