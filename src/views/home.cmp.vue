<template>
  <section class="home-page">
    <stay-filter />
<<<<<<< HEAD
    <stay-list  />
=======
    <stay-list v-if="staysToDisplay" :stays="staysToDisplay" />
>>>>>>> bdf822e03d5833a3608ffb71c87de3c61e9aedb9
  </section>
</template>
<script>
import stayList from '../components/stay-list.cmp.vue'
import stayFilter from '../components/stay-filter.cmp.vue'
import { stayService } from '../services/stay-service';

export default {
  name: 'home-page',
  components: {
    stayList,
    stayFilter
  },
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch({ type: 'loadStays' })

  },
  methods: {
    loadStays() {

    },
  },
  computed: {
    staysToDisplay() {
      return this.$store.getters.getStays
    }
  },
  unmounted() { },
}
</script>
