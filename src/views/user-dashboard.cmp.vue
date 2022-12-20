<template>
  <section class="user-dashboard main-layout-details">
    <h1>Trips</h1>
    <pre>{{ trips }}</pre>
    <!-- <trip-list v-if="trips" /> -->
  </section>

</template>
 <script>
import tripList from '../components/trip-list.cmp.vue'

export default {
  name: 'user-dashboard',
  components: {
    tripList
  },
  computed: {
    trips() {
      // return this.$store.getters.get
    }
  },
  created() {
    this.$store.dispatch({ type: 'getOrdersByGuest' })
  }
};
</script>