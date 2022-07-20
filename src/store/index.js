import { createStore } from 'vuex'
import stayModule from './modules/stay-module'


const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stayStore: stayModule,


    },
})

export default store