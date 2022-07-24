<template>
    <header class="main-header">
        <div class="app-header container">
            <div class="logo " @click="backToHomePage">
                <h2 ><i class="fab fa-airbnb"></i>stayinn</h2>
            </div>
            <search-cmp @setFilterBy="setFilterBy" @setTripDates="setTripDates" :currFilterBy="getFilterBy" />
            <nav class="nav-container">
                <a>
                    <router-link class="link" to="/stay">Explore</router-link>
                </a>
                <a>
                    <router-link class="link" to="/user/:userId">User</router-link>
                </a>
            </nav>
        </div>

    </header>
</template>

<script>
import logoCmp from "./logo.cmp.vue"
import searchCmp from "./search.cmp.vue"
import categoriesFilter from "./categories-filter.cmp.vue"

export default {
    template: `
`,
    props: [],
    data() {
        return {
            isHomePage: true
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
            this.$store.dispatch({type: 'loadStays'})
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
        backToHomePage(){
            this.$router.push(`/`) 
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
        logoCmp
    }
};
</script>