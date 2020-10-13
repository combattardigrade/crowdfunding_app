import {
    SAVE_TOKEN
} from '../actions/auth'

const initialState = {
    token: ''
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return {
                token: action.token
            }
        default:
            return state

    }
}