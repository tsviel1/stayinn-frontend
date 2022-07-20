<template>
    <header class="main-header flex items-center justify-between">
        <div>
            <div class="logo uppercase">
                <h2>StayInn <logo-cmp/></h2>
                
            </div>
            <search-cmp />
            <nav class="">
                <router-link class="link" to="/stay">Explore</router-link>
                <router-link class="link" to="/user/:userId">User</router-link>
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