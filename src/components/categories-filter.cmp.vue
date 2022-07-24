<template>
    <section class="categories-container">
      <ul class="clean-list grid">
        <li v-for="category in categories">
            <button>{{ category }}
              <img  />
            </button>
        </li>
      </ul>
    </section>

</template>
 <script>
import { tagBank } from '../services/data/airbnb.js';

 export default {
 name: 'categories-filter',
    components: {
    },
  data() {
   return {
    categories: tagBank
   };
    },
  created() {
    // console.log(this.categories)
  },
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>