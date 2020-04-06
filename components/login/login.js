import React from "react";
import { Form, Input, Button } from 'antd';
import PhoneInput from "./phoneInput";
import css from './login.scss'

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    checkUsername = (rule, value, callback) => {
        if (value.phoneNumber !== '') {
            return callback();
        }
        callback('請輸入手機號');
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={css.loginBox}>
                <Form style={{maxWidth: '500px'}} layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item className={css.loginItem} label="手機號">
                        {getFieldDecorator('username', {
                            initialValue: { phoneNumber: '', areaNumber: '00853' },
                            rules: [{required: true, validator: this.checkUsername }],
                        })(<PhoneInput />)}
                    </Form.Item>
                    <Form.Item className={css.loginItem} label="驗證碼">
                        {getFieldDecorator('captcha', {rules: [{ required: true, message: '請輸入驗證碼!' }]})(
                            <Input style={{width: '45%', marginRight: '3%'}}
                                   type="text"
                                   placeholder="請輸入驗證碼"
                            />,
                        )}
                        <Button type="primary" style={{width: '40%'}}>獲取驗證碼</Button>
                    </Form.Item>
                    <Form.Item style={{width: '300px', textAlign: 'center'}} className={css.loginItem}>
                        <Button type="primary" htmlType="submit" style={{width: '70px', marginRight: '5px'}}>登錄</Button>
                        <Button style={{width: '70px', marginLeft: '5px'}}>註冊</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}


const LoginForm = Form.create()(Login)

export default LoginForm;