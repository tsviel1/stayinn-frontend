<template>
    <section class="review-preview">
        <div class="review-preview-box  flex">
            <img class="reviewer-img" :src="review.by.imgUrl" />
            <div class="review-heading-txt flex">

                <h3  class="review-preview-name">{{ review.by.fullname }}</h3>
                <h3>July 2022</h3>
            </div>
        </div>
        <li class="review-preview-txt">{{ review.txt }}</li>
    </section>
</template>

<script>
export default {
    name: 'review-preview',
    props: {
        review: Object
    },
    data() {
        return {}
    },
    created() {
        console.log(this.review)
    },
    methods: {},
    computed: {},
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>