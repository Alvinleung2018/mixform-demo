
const menuInfo = (config) => {
    console.log(config)
    return {
        result: true,
        code: 200,
        data: [
            {
                title: "首页",
                path: "/dashboard",
                icon: "home",
                roles:["admin","editor","guest"]
            },
            {
                title: "开发文档",
                path: "/doc",
                icon: "file",
                roles:["admin","editor","guest"]
            },
        ]
    }
}

const users = {}

const addUser = (config) => {
    console.log(config)
    const data = JSON.parse(config.body);
    const { id } = data;
    users[`${id}-token`] = {
        ...data
    }
    console.log(users[`${id}-token`])
    return {
        status: 0,
    }
}


export default {
    menuInfo,
    addUser
}