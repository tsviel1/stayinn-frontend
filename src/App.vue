
<template>

  <app-header />
  <black-screen :class="{ 'modal-open': checkIfScreen }" @click="closeAllBig" />
  <router-view />
  <user-msg />


</template>
<script>
import appHeader from './components/header.cmp.vue'
import userMsg from './components/user-msg.vue';
import blackScreen from './components/black-screen.cmp.vue';



export default {
  components: {
    appHeader,
    userMsg,
    blackScreen

  },
  computed: {
    checkIfScreen() {
      const isSearchBig = this.$store.getters.getSearch
      const isReserveModal = this.$store.getters.getModal
      if (isSearchBig || isReserveModal) return true
      else return false
    }
  },
  methods: {
    closeAllBig() {
      this.$store.commit({ type: 'closeAllBig' })
    },
    handleScroll() {
      this.$store.commit({ type: 'closeSearchBig' })
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadStays' })
    window.addEventListener("scroll", this.handleScroll)
    this.$store.dispatch({type: 'getLoggedInUser'})
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
}
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
