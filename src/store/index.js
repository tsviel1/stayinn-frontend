import { createStore } from 'vuex'
import stayModule from './modules/stay-module'
import tripModule from './modules/trip-module'
import orderModule from './modules/order-module'
import userModule from './modules/user-module'


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
        userStore: userModule


    },
})

export default store