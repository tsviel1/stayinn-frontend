//:class="{active: isActive}"

<template>
    <header class="main-header">
        <div class="app-header container">
            <div class="logo " @click="backToHomePage">
                <h2 ><i class="fab fa-airbnb"></i>stayinn</h2>
            </div>
            <mini-search-cmp v-if="!isSearch" @click="isSearch = true" />
            <nav class="nav-container">
                <a>
                    <router-link class="link" to="/stay">Explore</router-link>
                </a>
                <a>
                    <router-link class="link" to="/user/:userId">User</router-link>
                </a>
            </nav>
        </div>
        <search-cmp v-if="isSearch" @setFilterBy="setFilterBy" @setTripDates="setTripDates" :currFilterBy="getFilterBy"
            @searchClicked="toggleIsActive" @showModal="shouldShow = true" />

    </header>


</template>

<script>
import logoCmp from "./logo.cmp.vue"
import searchCmp from "./search.cmp.vue"
import miniSearchCmp from "./mini-search.cmp.vue"
import categoriesFilter from "./categories-filter.cmp.vue"
import guestsModal from "./guests-modal.cmp.vue"

export default {
    template: `
`,
    props: [],
    data() {
        return {
            isHomePage: true,
            isSearch: false,

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
        }
    },
    computed: {
        getFilterBy() {
            return this.$store.getters.currFilterBy
        },
    },
    components: {
        searchCmp,
        categoriesFilter,
        logoCmp,
        miniSearchCmp,
        guestsModal
    }
};
</script>