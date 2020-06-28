const tokens = {
    admin: "admin-token",
    liang: "liang-token"
};


const usersTable = [
    {
        id: 1,
        username: 'admin',
        password: 'admin'
    },
    {
        id: 2,
        username: 'liang',
        password: 'liang'
    }
]

const login = (option) => {
    const {username, password} = JSON.parse(option.body)
    let obj = {}
     usersTable.forEach(item => {
        if(username === item.username && password === item.password) {
            obj = {
                ok: true,
                code: 200,
                result: {
                    username: username,
                    token: tokens[username]
                }
            }
        }
    })
    if(Object.keys(obj).length !== 0) {
        return obj
    } else {
        obj = {
            ok: false,
            code: 404,
            msg: '用户名或密码错误'
        }
        return obj
    }
}


export default {
    login
}