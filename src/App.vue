
<template>
  <section>
    <app-header />
    <router-view/>
  </section>
</template>
<script>
import appHeader from './components/header.cmp.vue'
export default {
  components: {
    appHeader,
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
