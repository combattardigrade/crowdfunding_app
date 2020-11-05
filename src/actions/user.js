export const SAVE_USER_DATA = 'SAVE_USER_DATA'
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA'

export function saveUserData(userData) {
    return {
        type: SAVE_USER_DATA,
        userData
    }
}

export function removeUserData() {
    return {
        type: REMOVE_USER_DATA,
    }
}