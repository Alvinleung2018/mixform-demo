import {message, notification} from "antd";

export const submitHolderMsg = (data: any) => {
    return new Promise((resolve, reject) => {
        resolve(data)
        notification.success({message: '持有人信息', description: JSON.stringify(data)})
        message.success('提交成功')
    })
}

export const submitOtherMsg = (data: any) => {
    return new Promise((resolve, reject) => {
        resolve(data)
        notification.success({message: '其他信息', description: JSON.stringify(data)})
        message.success('提交成功')
    })
}

export const submitAccountMsg = (data: any) => {
    return new Promise((resolve, reject) => {
        resolve(data)
        notification.success({message: '账户信息', description: JSON.stringify(data)})
        message.success('提交成功')
    })
}

export const submitTextFormPhone = (data: any) => {
    return new Promise((resolve, reject) => {
        resolve(data)
        notification.success({message: 'phone表格', description: JSON.stringify(data)})
        message.success('提交成功')
    })
}

export const submitTextFormEmail = (data: any) => {
    return new Promise((resolve, reject) => {
        resolve(data)
        notification.success({message: 'email表格', description: JSON.stringify(data)})
        message.success('提交成功')
    })
}