import {
    SAVE_PROJECTS, REMOVE_PROJECTS
} from '../actions/projects'

export default function projects(state = {}, action) {
    switch (action.type) {
        case SAVE_PROJECTS:
            return {
                ...state,
                ...action.projects
            }
        case REMOVE_PROJECTS:
            return {}
        default:
            return state

    }
}