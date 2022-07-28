//:class="{active: isActive}"

<template>
    <header class="main-header" :class="{'main-layout':!currPageHome, home:currPageHome, container:currPageHome}">
        <div class="app-header">
            <div class="logo" @click="backToHomePage">
                <stayinn-logo-svg /><span>stayinn</span>
            </div>
            <mini-search-cmp v-if="currSearchFalse" @click="toggleSearchBig" />
            <nav class="nav-container">
                <a class="btn-grey">
                    <router-link class="link" to="/stay">Become a Host</router-link>
                </a>
                <div class="btn-grey">
                    <world-svg/>
                </div>
                <a class="btn-user">
                    <div class="hamburger">
                        <hamburger-svg/>
                    </div>
                    <div class="user-svg">
                        <user-svg/>
                    </div>
                </a>
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
            currPageHome: null
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
        }
    },
    computed: {
        getFilterBy() {
            return this.$store.getters.currFilterBy
        },
        currSearchFalse() {
            if (this.$store.getters.getSearch === false) return true
            else return false
        }
    },
    watch: {
        $route: {
            handler() {
                console.log("route change!", this.$route.params.id);
                if (this.$route.params.id) this.currPageHome = false
                else this.currPageHome = true
                console.log('this.currPageHome', this.currPageHome)
                
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