<template>
    <button :class="{'is-clicked': isClicked}" @click="filterByCategory" class="category-btn">
        <img :src="setupImgUrl(category)" class="flex" />
        <span>{{ categoryMadeNormal }}</span>
    </button>
</template>

<script>
import { logicAnd } from '@vueuse/core';

export default {
    name: 'category-preview',
    props: {
        category: String
    },
    data() {
    return {
        isClicked:false,
        filterBy:{
            category:null
        },
       

    }
  },
    methods: {
        setupImgUrl(name) {
            return new URL(`../assets/categories/${name}.jpg`, import.meta.url).href;
        },
        filterByCategory(){
            this.filterBy.category=this.category
            this.isClicked=true
            this.$store.commit({
        type: 'setFilter',
        filterBy: { ...this.filterBy }
      })
      this.$store.dispatch({ type: "loadStays", filterBy: { ...this.filterBy } })

        }
    },
    computed: {
        categoryMadeNormal() {
            const category = this.category
            const c = category.replaceAll('-', ' ')
            const d = c.charAt(0).toUpperCase() + c.slice(1)
            return d
        }
    }
    ,created(){

    }

}
</script>