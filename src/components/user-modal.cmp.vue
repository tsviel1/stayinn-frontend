<template>
    <section class="user-modal">
        <pre>{{ user }}</pre>
    </section>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters.loggedinUser
        }
    },
}
</script>