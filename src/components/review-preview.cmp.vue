<template>
    <section class="review-preview">
        <h4>{{ review.by.fullname }}</h4>
        <h5>Here there will be createdAt date</h5>
        <li>{{ review.txt }}</li>
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