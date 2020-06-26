import React from 'react'
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import css from './login.scss'

class Login extends React.Component {

    handleFinish = values => {
        console.log(values)
    }

    render() {
        return(
            <div>
                <Form className={css.form}
                      onFinish={this.handleFinish}
                >
                    <div>
                        <h2 className={css.title}>用户登录</h2>
                    </div>
                    <Form.Item name="username"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please input your Username!',
                                   },
                               ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please input your Password!',
                                   },
                               ]}
                    >
                        <Input type="password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item>
                        <Button className={css.loginBtn} type="primary" htmlType="submit">Log in</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login