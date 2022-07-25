
<template>
  <section>
    <app-header />
    <router-view />
    <user-msg />
    <app-footer />
  </section>
</template>
<script>
import appHeader from './components/header.cmp.vue'
import userMsg from './components/user-msg.vue';
import appFooter from './components/app-footer.cmp.vue'


export default {
  components: {
    appHeader,
    userMsg,
    appFooter,
},
  created() {
    this.$store.dispatch({ type: 'loadStays' })
    console.log('Hi')
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
