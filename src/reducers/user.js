import { SAVE_USER_DATA, REMOVE_USER_DATA } from '../actions/user'

export default function user(state = {}, action) {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {                
                ...action.userData
            }
        case REMOVE_USER_DATA:
            return {}
        default:
            return state
    }
}