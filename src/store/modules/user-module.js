import { userService } from '../../services/user-service.js'
import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../../services/socket.service.js'

export default  {
    state: {
        loggedinUser: null,
        watchedUser: null
    },
    getters: {
        loggedinUser({ loggedinUser }) { return loggedinUser },
        watchedUser({ watchedUser }) { return watchedUser }
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            console.log(user, 3)
            state.loggedinUser = (user) ? { ...user } : null
            console.log(state.loggedinUser, 4)
        },
        setWatchedUser(state, { user }) {
            state.watchedUser = user
        },


    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred)
                console.log(user, 1)
                commit({ type: 'setLoggedinUser', user })
                console.log(user, 2)
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedinUser', user })
                return user
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }

        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },


    },

}
