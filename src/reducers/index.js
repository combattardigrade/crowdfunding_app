import { combineReducers } from 'redux'

import auth from './auth'
import projects from './projects'
import shared from './shared'

export default combineReducers({
    auth,
    projects,
    shared
})