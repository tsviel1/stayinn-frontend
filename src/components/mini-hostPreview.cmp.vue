<template>
    <section class="mini-host-preview">
        <h3>Hosted by {{stay.host.fullname}}</h3>
        <!-- <el-button plain>Contact Host</el-button> -->
        <button class="contact-btn">Contact Host</button>
    </section>
</template>

<script>
export default {
    name: 'mini-host-Preview',
    props: {
        stay: Object
    },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}   
</script>

<style lang="scss" scoped>
</style>