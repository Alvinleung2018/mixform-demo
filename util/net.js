import axios from 'axios'

const request = axios.create({
    headers: {'Content-type': 'application/json'},
    timeout: 5000
})

export const get  = (url, params = {}) => {
    return request({
        url: url,
        method: 'get',
        params: params
    })
}

export const post = (url, body) => {
    return request({
        url: url,
        method: 'post',
        data: body
    })
}