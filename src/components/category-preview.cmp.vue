<template>
    <button class="category-btn">
        <img :src="setupImgUrl(category)" class="flex" />
        <span>{{ categoryMadeNormal }}</span>
    </button>
</template>

<script>
export default {
    name: 'category-preview',
    props: {
        category: String
    },
    methods: {
        setupImgUrl(name) {
            return new URL(`../assets/categories/${name}.jpg`, import.meta.url).href;
        },
    },
    computed: {
        categoryMadeNormal() {
            const category = this.category
            const c = category.replaceAll('-', ' ')
            const d = c.charAt(0).toUpperCase() + c.slice(1)
            console.log('d', d)
            return d
            


        }
    }

}
</script>