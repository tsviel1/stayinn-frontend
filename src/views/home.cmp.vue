<template>
  <section>
    <stay-filter/>
    <stay-list />
  </section>
</template>
 <script>
import stayList from '../components/stay-list.cmp.vue'
import stayFilter from '../components/stay-filter.cmp.vue'
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
  created() { },
  methods: {},
  computed: {
   stays(){
    return this.$store.getters.getStays
   }
  },
  unmounted() { },
}
</script>
