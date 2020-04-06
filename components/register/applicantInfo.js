import React from "react";
import {Form, Select, Input, Radio, Button,} from 'antd';
import css from "./style.scss";
import PhoneInput from "../login/phoneInput";
import RadioInput from '../formComponents/radioInput'
const {Item} = Form;

class ApplicantInfo extends React.Component {

    state = {
        currentStep: 1
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        const {currentStep} = this.state
        console.log()
        this.props.submitInfo(currentStep)
    };

    checkApplicant = (rule, value, callback) => {
        console.log(value)
        if(value.applicantType === 'c' && !value.IDCard) {
            return callback('請輸入代辦人身份證號')
        }
        callback()
    }

    checkPhoneNumber = (rule, value, callback) => {
        if (value.phoneNumber !== '') {
            return callback();
        }
        callback('請輸入手機號');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6},
            wrapperCol: { span: 18 },
            style: {width: '450px', margin: '0 auto'}
        };

        const infoList = [
            {
                id: '1',
                label: '企業主',
                value: 'a',
                isDefault: true,
                remarks: false
            },
            {
                id: '2',
                label: '股東',
                value: 'b',
                isDefault: false,
                remarks: false
            },
            {
                id: '3',
                label: '代辦人',
                value: 'c',
                isDefault: false,
                remarks: true
            }
        ]

        return (
            <div className={css.container}>
                <h2 className={css.title}>完善申请人信息</h2>
                <Form {...formItemLayout} className={css.formStyle} onSubmit={this.handleSubmit}>
                    <Item label="申請人">
                        {getFieldDecorator('applicant', {
                            initialValue: { applicantType: 'a', IDCard: '' },
                            rules: [{required: true, validator: this.checkApplicant }]
                        })(
                            <RadioInput infoList={infoList} inputPlaceHolder="代辦人身份證號碼" radioKey="applicantType" inputKey="IDCard" />
                        )}
                    </Item>
                    <Item label="英文名">
                        {getFieldDecorator('englishName', {
                            rules: [{required: true, message: '請輸入英文名'}]
                        })(
                            <Input placeholder="按身份證明文件填寫" />
                        )}
                    </Item>
                    <Item label="中文名">
                        {getFieldDecorator('chineseName', {
                            rules: []
                        })(
                            <Input placeholder="按身份證明文件填寫" />
                        )}
                    </Item>
                    <Item label="聯繫電話">
                        {getFieldDecorator('phone', {
                            initialValue: { areaNumber: '00853', phoneNumber: '' },
                            rules: [{required: true, validator: this.checkPhoneNumber }]
                        })(
                            <PhoneInput />
                        )}
                    </Item>
                    <Item label="聯繫電郵">
                        {getFieldDecorator('email',  {
                            rules: [{
                                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                message: '聯繫電郵格式有誤，請重新填寫'
                            }]
                        })(
                            <Input placeholder="請填寫聯繫電郵地址" />
                        )}
                    </Item>
                    <Item label="微信號/微信電話">
                        {getFieldDecorator('wechat', {})(
                            <Input placeholder="請填寫微信號/微信電話" />
                        )}
                    </Item>
                    <Item wrapperCol={{span: 24}}>
                        <Button htmlType="submit">下一步</Button>
                    </Item>
                </Form>
            </div>
        );
    }
}


const ApplicantForm = Form.create()(ApplicantInfo)

export default ApplicantForm;