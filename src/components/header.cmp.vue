//:class="{active: isActive}"

<template>
    <header class="main-header">
        <div class="app-header container">
            <div class="logo" @click="backToHomePage">
                <stayinn-logo-svg/><span>stayinn</span>
            </div>
            <mini-search-cmp v-if="currSearchFalse" @click="toggleSearchBig" />
            <nav class="nav-container">
                <a>
                    <router-link class="link" to="/stay">Explore</router-link>
                </a>
                <a>
                    <router-link class="link" to="/user/:userId">User</router-link>
                </a>
            </nav>
        </div>
        <search-cmp @setFilterBy="setFilterBy" @setTripDates="setTripDates" :currFilterBy="getFilterBy"
            @searchClicked="toggleIsActive" />

    </header>


</template>

<script>
import searchCmp from "./search.cmp.vue"
import miniSearchCmp from "./mini-search.cmp.vue"
import categoriesFilter from "./categories-filter.cmp.vue"
import guestsModal from "./guests-modal.cmp.vue"
import stayinnLogoSvg from "./svg/stayinn-logo-svg.vue"

export default {
    template: `
`,
    props: [],
    data() {
        return {
            isHomePage: true,
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
        setTripDates(startDate, endDate) {
            this.$store.commit({
                type: 'setStartDate',
                startDate
            })
            this.$store.commit({
                type: 'setEndDate',
                endDate
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
    components: {
        searchCmp,
        categoriesFilter,
        miniSearchCmp,
        guestsModal,
        stayinnLogoSvg
    }
};
</script>