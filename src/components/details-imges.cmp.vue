<template>
    <section class="img-container">
        <ul class="img-list clean-list grid">
            <li v-for="img in stay.imgUrls" :key="img">
                <img class="stay-img" :src="setupImgUrl(img)" />
                <pre></pre>
            </li>
        </ul>

    </section>
    
</template>

<script>
export default {
     name: 'details-images',
        props: {
            stay: Object
        },
    methods: {
        setupImgUrl(name) {
            return new URL(`../assets/Images/${name}`, import.meta.url).href;
        },
    },
}

</script>

<style lang="scss" scoped>
</style>