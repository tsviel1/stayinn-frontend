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
}


async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
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