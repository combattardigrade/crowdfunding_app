import {
    SAVE_PUBLIC_SETTINGS
} from '../actions/settings'

export default function settings(state = {}, action) {
    switch (action.type) {
        case SAVE_PUBLIC_SETTINGS:
            return {
                ...state,
                ...action.settings
            }
        default:
            return state

    }
}