import { createStore } from 'vuex'
import stayModule from './modules/stay-module'
import tripModule from './modules/trip-module'
import orderModule from './modules/order-module'
import userStore from './modules/user.store'


const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stayStore: stayModule,
        tripStore: tripModule,
        orderStore: orderModule,
        userStore: userStore


    },
})

export default store