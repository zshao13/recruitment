import request from '@/utils/request'

export function addResume (res) {
    return request({
        url: '/personal/addResume',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getResume (res) {
    return request({
        url: '/personal/info',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function addCompanyInfo (res) {
    return request({
        url: '/company/add',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getCompanyInfo (res) {
    return request({
        url: '/company/info',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function addPosition (res) {
    return request({
        url: '/position/add',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getPositionListForUser (res) {
    return request({
        url: '/position/listForUser',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getPositionInfo (res) {
    return request({
        url: '/position/info',
        method: 'POST',
        data: {
            ...res
        }
    })
}
