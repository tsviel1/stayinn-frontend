<template>
    <section class="stay-deatils-heading">
        <h1 class="stay-title">{{ stay.name }}</h1>
        <div class="sub-titles flex">
            <div class="sub-titles-details flex">
                <span>
                    <i class="fa fa-star"></i> <span class="avg-reviews"> {{ getAvgReviews }} · </span>
                    <span class="underline">{{ getReviewsAmount }} reviews </span>
                </span>
                <span class="dot"> · </span>
                <span class="stay-location underline">
                    {{ stay.loc.address }}
                </span>
            </div>
            <div class="share-save flex">
                <div class="share-btn flex">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
                    <span>Share</span>
                </div>
                <div class="save-btn flex">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                    <span>Save</span>
                </div>
                
            </div>

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