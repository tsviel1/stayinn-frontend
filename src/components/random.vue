<template>
    <section class="todo-filter">
        <form @submit.prevent="onSubmitFilters">
            <li>
                <input v-model="this.filterBy.status" type='radio' value='all' name='radio' @change="onSubmitFilters"
                    id='all-filter-todo' />
                <label for='all-filter-todo'>All</label>
            </li>
            <li>
                <input v-model="this.filterBy.status" type='radio' value='active' @change="onSubmitFilters" name='radio'
                    id='active-filter-todo' />
                <label for='active-filter-todo'>Active</label>
            </li>
            <li>
                <input v-model="this.filterBy.status" type='radio' value='done' @change="onSubmitFilters" name='radio'
                    id='done-filter-todo' />
                <label for='done-filter-todo'>Done</label>
            </li>
        </form>
    </section>
</template>
<script>
export default {
    name: 'ProjectApp',
    data() {
    return {
      filterBy: {
        status: 'all',
        txt: '',
      },
    }
  },
  methods: {
    onSubmitFilters(ev) {
        var newFilter = JSON.parse(JSON.stringify(this.filterBy))
        this.$emit('submitedFilter', newFilter)
    },
  },
}