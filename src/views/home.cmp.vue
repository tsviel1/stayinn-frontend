<template>
  <section class="home-page">
    <stay-filter />
    <stay-list v-if="staysToDisplay" :stays="staysToDisplay" />
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
