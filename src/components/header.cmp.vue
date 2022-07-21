<template>
    <header class="main-header ">
        <div class="app-header container">
            <div class="logo ">
                <h2>StayInn<i class="fa-brands fa-airbnb"></i></h2>
                
            </div>
            <search-cmp />
            <nav class="nav-container">
                <a><router-link class="link" to="/stay">Explore</router-link></a>
                <a><router-link class="link" to="/user/:userId">User</router-link></a>
            </nav>
        </div>
        <categories-filter v-if="isHomePage" />
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
    methods: {},
    computed: {},
    components: {
        searchCmp,
        categoriesFilter,
        logoCmp
    }
};
</script>