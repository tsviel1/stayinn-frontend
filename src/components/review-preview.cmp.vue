<template>
    <section class="review-preview  ">
        <div class="review-preview-box  flex">
            <img class="reviewer-img" :src="review.by.imgUrl" />
            <div class="review-heading-txt flex">

                <h3 class="review-preview-name">{{ review.by.fullname }}</h3>
                <h3 class="review-preview-date">July 2022</h3>
            </div>
        </div>
        <span class="review-preview-txt">{{ formatedText }}<span v-if="!isMore && getReviewLength">...</span>
        </span>
        <span :style="readStyle" v-if="getReviewLength" @click="isMore = !isMore">{{ readText }} </span>
    </section>
</template>

<script>
export default {
    name: 'review-preview',
    props: {
        review: Object
    },
    data() {
        return {
            isMore: false,
        }
    },
    created() {
        // console.log(this.review)
    },
    methods: {},
    computed: {
        getReviewLength() {
            // console.log(this.review.txt.length);
            return this.review.txt.length > 180

        },
        formatedText() {
            return this.isMore ? this.review.txt : this.review.txt.slice(0, 180)
        },
        readText() {
            return this.isMore ? ' Read Less' : 'Read more'
        },
        readStyle() {
            return {
                cursor: 'pointer',
                'text-decoration': 'underline',
            }
        },
    },
    unmounted() { },
}

</script>

<style lang="scss" scoped>
</style>