<template>
    <header class="main-header"
        :class="{ 'main-layout': currPageHome, home: currPageHome, 'main-layout-details': !currPageHome }">
        <div class="app-header">
            <div class="logo" @click="backToHomePage">
                <stayinn-logo-svg /><span>stayinn</span>
            </div>
            <mini-search-cmp v-if="currSearchFalse" @click="toggleSearchBig" />
            <nav class="nav-container">
                <!-- <a class="btn-grey">
                    <router-link class="link" to="/stay">Become a Host</router-link>
                </a>
                <div class="btn-grey">
                    <world-svg />
                </div> -->
                <div class="btn-user-all">
                    <a class="btn-user" @click="toggleUserDropdown">
                        <div class="hamburger">
                            <hamburger-svg />
                        </div>
                        <div class="user-svg">
                            <img class="user-img" v-if="getUser" :src="getUser.imgUrl">
                            <user-svg v-else />
                        </div>
                    </a>
                    <div class="user-dropdown" v-if="userDropdown && !getUser">
                        <div class="sign-up" @click="loginPage">
                            Sign up <span>/ Log in</span>
                        </div>
                    </div>
                    <div class="user-dropdown" v-if="userDropdown && getUser" v-click-outside="toggleUserDropdown">
                        <div class="sign-up wish">
                            Wishlist
                        </div>
                        <div class="sign-up board" @click="dashboard">
                            Dashboard
                        </div>
                        <div class="sign-up out" @click="logout">
                            Log out
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <search-cmp @setFilterBy="setFilterBy" @setTripDates="setTripDates" :currFilterBy="getFilterBy"
            @searchClicked="toggleIsActive" @setTripCity="setTripCity" />

    </header>


</template>

<script>
import searchCmp from "./search.cmp.vue"
import miniSearchCmp from "./mini-search.cmp.vue"
import categoriesFilter from "./categories-filter.cmp.vue"
import guestsModal from "./guests-modal.cmp.vue"
import stayinnLogoSvg from "./svg/stayinn-logo-svg.vue"
import worldSvg from "./svg/world-svg_i18.vue"
import userSvg from "./svg/user-svg.vue"
import hamburgerSvg from "./svg/hamburger-svg.vue"

export default {
    template: `
`,
    props: [],
    data() {
        return {
            currPageHome: null,
            userDropdown: false
        };
    },
    created() { },
    methods: {
        setTripCity(filterBy) {
            this.$store.commit({
                type: 'setTripCity',
                filterBy
            })
        },
        setFilterBy(filterBy) {
            this.$store.commit({
                type: 'setFilter',
                filterBy
            })
            this.$store.dispatch({ type: 'loadStays' })
        },
        setTripDates(chckInDate, chckOutDate) {
            this.$store.commit({
                type: 'setTripDates',
                chckInDate, chckOutDate
            })
        },
        backToHomePage() {
            this.$router.push(`/`)
        },
        toggleIsActive() {
            this.isActive = !this.isActive
            this.shouldShow = false
        },
        toggleSearchBig() {
            this.$store.commit('toggleSearchBig')
        },
        setupImgUrl(name) {
            return new URL(`../assets/Images/${name}`, import.meta.url).href;
        },
        loginPage() {
            this.userDropdown = false
            this.$router.push('/login')
        },
        dashboard() {
            this.userDropdown = false
            this.$router.push('/order')
        },
        toggleUserDropdown() {
            this.userDropdown = !this.userDropdown
        },
        async logout() {
            this.userDropdown = false
            try {
                await this.$store.dispatch({type: 'logout'})
            } catch(err) {
                console.log('cannot logout', err)
            }
            
        }
    },
    computed: {
        getFilterBy() {
            return this.$store.getters.currFilterBy
        },
        currSearchFalse() {
            if (this.$store.getters.getSearch === false) return true
            else return false
        },
        getUser() {
            return this.$store.getters.loggedinUser
        }
    },
    watch: {
        $route: {
            handler() {
                if (this.$route.params.id) this.currPageHome = false
                else this.currPageHome = true
                if (this.$route.path === '/login' || this.$route.path === '/order') {
                    this.currPageHome = false
                }

            },
            immediate: true,
        },
    },
    components: {
        searchCmp,
        categoriesFilter,
        miniSearchCmp,
        guestsModal,
        stayinnLogoSvg,
        worldSvg,
        userSvg,
        hamburgerSvg
    }
};
</script>