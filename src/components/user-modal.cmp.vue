<template>
    <section class="user-modal">
        <pre>{{ user }}</pre>
    </section>
</template>

<script>
    export default {

        data() {
        return {}
        },
        created() {},
        methods: {},
        computed: {
            user() {
                return this.$store.getters.loggedinUser
            }
        },
        unmounted() {},
        }

</script>

<style lang="scss" scoped>

</style>