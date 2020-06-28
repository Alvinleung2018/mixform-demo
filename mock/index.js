import Mock from "mockjs";

import menuAPI from './menu'
import loginAPI from './login'

// mockFetch(Mock);

// Mock.setup({
//     timeout: '200-400', // mockFetch支持 mockjs 已有的 timeout 设置项
//     debug: true, // mockFetch新增的设置项，如果开启，请求时会打印一些日志
// });


Mock.mock('/api/menu', 'get', menuAPI.menuInfo)
Mock.mock('/api/adduser', 'post', menuAPI.addUser)
Mock.mock('/api/login', 'post', loginAPI.login)


export default Mock