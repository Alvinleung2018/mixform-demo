


const menuInfo = (config) => {
    console.log(config)
    return {
        ok: true,
        statusCode: 200,
        result: [
            {
                id: 1,
                title: "首页",
                path: "/dashboard",
                icon: "AuditOutlined",
                roles:["admin","editor","guest"]
            },
            {
                id: 2,
                title: "开发文档",
                path: "/doc",
                icon: "PayCircleOutlined",
                roles:["admin","editor","guest"]
            },
            {
                id: 3,
                title: "权限测试",
                path: "/permission",
                icon: "PartitionOutlined",
                children: [
                    {
                        id: 1,
                        title: "权限说明",
                        path: "/permission/explanation",
                        roles:["admin"]
                    },
                    {
                        id: 2,
                        title: "admin页面",
                        path: "/permission/adminPage",
                        roles:["admin"]
                    },
                    {
                        id: 3,
                        title: "guest页面",
                        path: "/permission/guestPage",
                        roles:["guest"]
                    },
                    {
                        id: 4,
                        title: "editor页面",
                        path: "/permission/editorPage",
                        roles:["editor"]
                    },
                ],
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