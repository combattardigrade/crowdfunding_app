export const SAVE_PROJECTS = 'SAVE_PROJECTS'

export function saveProjects(projects) {
    return {
        type: SAVE_PROJECTS,
        projects
    }
}