export const SAVE_PROJECTS = 'SAVE_PROJECTS'
export const REMOVE_PROJECTS = 'REMOVE_PROJECTS'

export function saveProjects(projects) {
    return {
        type: SAVE_PROJECTS,
        projects
    }
}

export function removeProjects() {
    return {
        type: REMOVE_PROJECTS,
    }
}