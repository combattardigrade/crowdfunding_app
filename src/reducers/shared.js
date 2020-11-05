import {
    SET_SELECTED_PROJECT
} from '../actions/shared'


export default function auth(state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_PROJECT:
            return {
                selectedProject: action.projectId
            }
        default:
            return state

    }
}