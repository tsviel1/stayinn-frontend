<template>
  <section class="home-page container">
    <div class="shadow" v-if="getIsSearchBig" @click="setSearchSmall"></div>
    <categories-filter />
    <!-- <stay-filter /> -->
    <stay-list v-if="staysToDisplay" :stays="staysToDisplay" />
  </section>
</template>
<script>
import stayList from '../components/stay-list.cmp.vue'
import stayFilter from '../components/stay-filter.cmp.vue'
import { stayService } from '../services/stay-service';
import categoriesFilter from '../components/categories-filter.cmp.vue';

export default {
  name: 'home-page',
  components: {
    stayList,
    stayFilter,
    categoriesFilter
  },
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch({ type: 'loadStays' })
    this.$store.commit({type: 'makeSearchSmall'})

  },
  methods: {
    setSearchSmall() {
      this.$store.commit({type: 'toggleSearchBig'})
    },
  },
  computed: {
    staysToDisplay() {
      let filter = this.$store.getters.currFilterBy
      if (filter) {
        this.$router.push(`/stay`)
      } else {

        return this.$store.getters.staysToDisplay
      }
    },
    getIsSearchBig() {
      return this.$store.getters.getSearch
    }
  },
  unmounted() { },
}
</script>
