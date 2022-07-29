// import { storageService } from "./storage-service.js";
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'


const KEY = 'loggedinUser'
export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    saveLocalUser,
    getById
}


async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    console.log(user)
    socketService.login(user._id)
    return saveLocalUser(user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) {
        socketService.login(user._id)
        return saveLocalUser(user)
    }
}

async function logout() {
    sessionStorage.removeItem(KEY)
    socketService.logout()
    return await httpService.post('auth/logout')
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(KEY))

}
function saveLocalUser(user) {
    sessionStorage.setItem(KEY, JSON.stringify(user))
    return user
}

async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)

    socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}