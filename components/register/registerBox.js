import React from "react";
import { Form, Input, Button } from 'antd';
import css from "./style.scss";
import PhoneInput from "../login/phoneInput";
const {Item} = Form;

class RegisterBox extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6},
            wrapperCol: { span: 18 }
        };
        return (
            <div className={css.container}>
                <h2 className={css.title}>申請註冊</h2>
                <Form {...formItemLayout} className={css.formStyle} onSubmit={this.handleSubmit}>
                    <Item label="手機號">
                        {getFieldDecorator('username', {
                            initialValue: { phoneNumber: '', areaNumber: '00853' },
                            rules: [{required: true, validator: this.checkUsername }],
                        })(<PhoneInput />)}
                    </Item>
                    <Item label="驗證碼">
                        {getFieldDecorator('captcha', {rules: [{ required: true, message: '請輸入驗證碼!' }]})(
                            <Input style={{width: '60%', marginRight: '3%'}}
                                   type="text"
                                   placeholder="請輸入驗證碼"
                            />,
                        )}
                        <Button type="primary" style={{width: '37%'}}>獲取驗證碼</Button>
                    </Item>
                    <Item wrapperCol={{span: 24}}>
                        <Button htmlType="submit">下一步</Button>
                    </Item>
                </Form>
            </div>
        );
    }
}

const RegisterForm = Form.create()(RegisterBox)

export default RegisterForm