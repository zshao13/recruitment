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

export function getPositionAll (res) {
    return request({
        url: '/position/all',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function setPositionStatus (res) {
    return request({
        url: '/position/status',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function sendPosition (res) {
    return request({
        url: '/position/send',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getSendList (res) {
    return request({
        url: '/personal/sendList',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getTalentsList (res) {
    return request({
        url: '/personal/list',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function setStatus (res) {
    return request({
        url: '/resume/status',
        method: 'POST',
        data: {
            ...res
        }
    })
}

export function getTalentsListForP (res) {
    return request({
        url: '/personal/listforp',
        method: 'POST',
        data: {
            ...res
        }
    })
}
