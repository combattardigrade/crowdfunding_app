export const SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT'

export function setSelectedProject(projectId) {
    return {
        type: SET_SELECTED_PROJECT,
        projectId
    }
}