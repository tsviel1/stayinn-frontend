<template>
    <section class="stay-deatils-heading">
        <h1 class="stay-title">{{ stay.name }}</h1>
        <div class="sub-titles flex">
            <span>
                <i class="fa fa-star"></i> <span class="avg-reviews"> {{ getAvgReviews }} · </span>
                <span class="underline">{{ getReviewsAmount }} reviews </span>
            </span>
            <span class="dot"> · </span>
            <span class="stay-location underline">
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'stay-deatils-heading',
    props: {
        stay: Object
    },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        getAvgReviews() {
            return this.$store.getters.getCurrStayAvg
        },
        getReviewsAmount() {
            return this.$store.getters.getReviewsLength
        }
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>