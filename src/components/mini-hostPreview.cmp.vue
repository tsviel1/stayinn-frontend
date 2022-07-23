<template>
    <section class="mini-host-preview">
        <div class="mini-host-flex flex">
            <img class="mini-host-img" :src="stay.host.imgUrl" />
            <div class="">
                <h2 class="mini-host-title">Hosted by {{stay.host.fullname}}</h2>
                <p class="mini-host-date">Joined in October 2019</p>
            </div>
        </div>
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