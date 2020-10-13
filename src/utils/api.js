import { API } from '@env'

export function signup(params) {
    
    return fetch(API + 'signup', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export function login(params) {
    return fetch(API + 'login', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}