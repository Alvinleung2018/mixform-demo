// import React from "react";
// import { Form, Input, Button } from 'antd';
// import css from "./registerBox.scss";
// import PhoneInput from "../login/phoneInput";
//
// class RegisterBox extends React.Component {
//
//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <div className={css.container}>
//                 <h2 style={{paddingBottom: '30px'}}>申請註冊</h2>
//                 <Form layout="inline" onSubmit={this.handleSubmit}>
//                     <Form.Item style={{paddingBottom: '30px'}} className={css.item} label="手機號">
//                         {getFieldDecorator('username', {
//                             initialValue: { phoneNumber: '', areaNumber: '00853' },
//                             rules: [{required: true, validator: this.checkUsername }],
//                         })(<PhoneInput />)}
//                     </Form.Item>
//                     <Form.Item style={{paddingBottom: '30px'}} className={css.item} label="驗證碼">
//                         {getFieldDecorator('captcha', {rules: [{ required: true, message: '請輸入驗證碼!' }]})(
//                             <Input style={{width: '50%', marginRight: '3%'}}
//                                    type="text"
//                                    placeholder="請輸入驗證碼"
//                             />,
//                         )}
//                         <Button type="primary" style={{width: '36%'}}>獲取驗證碼</Button>
//                     </Form.Item>
//                     <Form.Item className={css.next}>
//                         <Button>下一步</Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         );
//     }
// }
//
// const RegisterForm = Form.create()(RegisterBox)
//
// export default RegisterForm