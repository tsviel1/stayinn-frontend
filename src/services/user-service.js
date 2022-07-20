import { storageService } from "./storage-service.js";

const KEY = 'loggedinUser'



function signup(signupInfo) {
    return storageService.post(KEY, signupInfo)
}

function login(userId) {
    return storageService.get(KEY, userId)
}

function logout(userId) {
    return storageService.remove(KEY, userId)
}

function getLoggedInUser() {
    return storageService.query(KEY)
}