export const SAVE_PUBLIC_SETTINGS = 'SAVE_PUBLIC_SETTINGS'

export function savePublicSettings(settings) {
    return {
        type: SAVE_PUBLIC_SETTINGS,
        settings
    }
}