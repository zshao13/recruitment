import request from '@/utils/request'

export function userLogin (res) {
    return request({
        url: '/login',
        method: 'post',
        data: res
    })
}

export function addUser (res) {
    return request({
        url: '/system/addUser',
        method: 'POST',
        data: {
            ...res
        }
    })
}
