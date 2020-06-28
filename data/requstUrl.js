import {get, post} from "../util/net";


export const userLogin = (username, password) => {
    return post('/api/login', {
        username,
        password
    })
}


export const getMenu = () => {
    return get('/api/menu')
}


export const createUser = (id, name, age) => {
    return post('/api/adduser', {
        id,
        name,
        age,
    })
}