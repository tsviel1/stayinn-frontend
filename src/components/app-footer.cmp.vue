<template>
    <section class="footer flex">

        <div>
            <span>&#169 Stayinn, inc</span>
            <span>·</span>
            <span>Privacy</span>
            <span>·</span>
            <span>Terms</span>
            <span>·</span>
            <span>Siteup</span>
        </div>
        <div>
            <div class="flex">
                <img class="language-icon" src="@/assets/svgs/language.svg" />
                <span>Engtlish(US)</span>
                <span>$ USD</span>
            </div>
            <div class="flex">
                <ul class="clean-list flex">
                    <li>
                        <img class="social-icon" src="@/assets/svgs/facebook.svg" />

                    </li>
                    <li>
                        <img class="social-icon" src="@/assets/svgs/twitter.svg" />
                    </li>
                    <li>
                        <img class="social-icon" src="@/assets/svgs/instagram.svg" />
                    </li>
                </ul>


            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'app-footer',
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