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

export function getUserData(params) {
    return fetch(API + 'userProfile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function getMyInvestmentTxs(params) {
    return fetch(API + `/investmentTxs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function getMyReceivedPayments(params) {
    return fetch(API + `/receivedPayments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function getUserTxDocuments(params) {
    return fetch(API + `userTxDocuments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function getAllQuestionsByPage(params) {
    return fetch(API + `faqs/${params.page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function saveUserBankAccount(params) {
    return fetch(API + 'userProfile/bankAccount', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function saveUserBeneficiaries(params) {
    return fetch(API + 'userProfile/beneficiaries', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function saveUserDocument(params) {
    return fetch(API + 'userProfile/document', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function saveUserTxProfile(params) {
    return fetch(API + 'userProfile/txProfile', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function getAddressesByPostalCode(params) {
    return fetch(API + `sepomex/getAddresses/${params.codigoPostal}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function saveUserAddress(params) {
    return fetch(API + 'userProfile/address', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function savePersonalInfo(params) {
    return fetch(API + 'userProfile/personalInfo', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function saveUserPhone(params) {
    return fetch(API + `/userProfile/phone`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function verifyPhone(params) {
    return fetch(API + `/auth/verifyPhone`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function saveUserRisksKnowledge(params) {
    return fetch(API + 'userProfile/risksKnowledge', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        },
    })
}

export function changePassword(params) {
    return fetch(API + 'auth/changePassword/', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function changeEmail(params) {
    return fetch(API + 'auth/changeEmail/', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function sendAuthCode(params) {
    return fetch(API + 'auth/sendCode/' + params.requestType, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.token
        }
    })
}

export function getPlatformPublicSettings(params) {
    return fetch(API + 'platformPublicSettings', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
