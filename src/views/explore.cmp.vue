<template>
<section class="explore-app container">
  <stay-filter />
  <stay-list :stays="staysToDisplay"/>
  </section>
  <app-footer />
</template>
 <script>
import stayFilter from '../components/stay-filter.cmp.vue';
import stayList from '../components/stay-list.cmp.vue';
import appFooter from '../components/app-footer.cmp.vue';

export default {
  name: 'explore',
  components: {
    stayFilter,
    stayList,
    appFooter
  },
  data() {
    return {
    
    };
  },
  created() { 

  },
  methods: {},
  computed: {
    staysToDisplay() {
      let stays = this.$store.getters.stays
      // console.log(stays)
      return stays
    }
  },

  unmounted() { },
};
</script>
