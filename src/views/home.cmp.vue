<template>
  <section v-if="staysToDisplay" class="home-page main-layout">
    <categories-filter />
    <stay-list v-if="staysToDisplay" :stays="staysToDisplay" />
  </section>
  <section v-else>
    <img class="img" src="../assets/loader/loader.gif">
  </section>
</template>
<script>
import stayList from '../components/stay-list.cmp.vue'
import categoriesFilter from '../components/categories-filter.cmp.vue';

export default {
  name: 'home-page',
  components: {
    stayList,
    categoriesFilter
  },
  created() {
    this.$store.commit({ type: 'resetFilter' })
    this.$store.commit({ type: 'resetTrip' })
    this.$store.dispatch({ type: 'loadStays' })
    this.$store.commit({ type: 'makeSearchSmall' })
  },
  methods: {
    setSearchSmall() {
      this.$store.commit({ type: 'toggleSearchBig' })
    },
  },
  computed: {
    staysToDisplay() {
      let filter = this.$store.getters.currFilterBy
      if (filter?.txt) {
        this.$router.push(`/stay`)
      }
      return this.$store.getters.stays
    },
    getIsSearchBig() {
      return this.$store.getters.getSearch
    }
  },
}
</script>
<style>
.img {
  height: 98vh;
  object-fit: cover
}
</style>