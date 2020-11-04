import { API } from '@env'
console.log(API)
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

export function getAllProjectsByStatusAndPage(params) {
    return fetch(API + `projects/${params.status}/${params.page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}