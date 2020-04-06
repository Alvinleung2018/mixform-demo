import React from "react";
import {Form, Input, Radio, Button} from "antd";
import css from './style.scss';
import RadioInout from '../formComponents/radioInput';
import RadioAvatar from "../formComponents/radioAvatar";
import RadioSeries from "../formComponents/radioSeries";

const {Item} = Form;
const {Group} = Radio;

class CompanyForm extends React.Component {

    checkMsgOrigin = (rule, value, callback) => {
        if(value.organization === 'g' && !value.remarks) {
            return callback('請輸入其他機構名稱')
        }
        callback()
    }

    checkInstallation = (rule, value, callback) => {
        callback()
    }

    handleSubmit = () => {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 8},
            wrapperCol: { span: 16 },
        };
        const infoList = [
            {
                id: '1',
                label: '極易付',
                value: 'a',
                isDefault: true,
                remarks: false
            },
            {
                id: '2',
                label: '大西洋銀行',
                value: 'b',
                isDefault: false,
                remarks: false
            },
            {
                id: '3',
                label: '廣發銀行',
                value: 'c',
                isDefault: false,
                remarks: false
            },
            {
                id: '4',
                label: '華僑永亨銀行',
                value: 'd',
                isDefault: false,
                remarks: false
            },
            {
                id: '5',
                label: '國際銀行',
                value: 'e',
                isDefault: false,
                remarks: false
            },
            {
                id: '6',
                label: '立橋銀行',
                value: 'f',
                isDefault: false,
                remarks: false
            },
            {
                id: '7',
                label: '其他機構',
                value: 'g',
                isDefault: false,
                remarks: true
            }
        ]

        const installationList = [
            {
                id: '1',
                label: '智能POS機',
                value: 'a',
                isDefault: true,
                picSrc: '/static/favicon.ico'
            },
            {
                id: '2',
                label: '點餐打印機',
                value: 'b',
                isDefault: false,
                picSrc: '/static/favicon.ico'
            },
            {
                id: '3',
                label: '收銀台對接',
                value: 'c',
                isDefault: false,
                picSrc: '/static/favicon.ico'
            },
            {
                id: '4',
                label: '銀行一體機',
                value: 'd',
                isDefault: false,
                picSrc: '/static/favicon.ico'
            },
            {
                id: '5',
                label: '刷臉支付',
                value: 'e',
                isDefault: false,
                picSrc: '/static/favicon.ico'
            },
        ]

        const branchList = [
            {
                id: '1',
                label: '2-4間',
                value: 'a',
                isDefault: true,
            },
            {
                id: '2',
                label: '5-7間',
                value: 'b',
                isDefault: false,
            },
            {
                id: '3',
                label: '8-10間',
                value: 'c',
                isDefault: false,
            },
            {
                id: '4',
                label: '>10間',
                value: 'd',
                isDefault: false,
            },
        ]

        return(
            <div className={css.container}>
                <h2 className={css.title}>填寫企業信息</h2>
                <Form {...formItemLayout} className={css.formStyle} onSubmit={this.handleSubmit}>
                    <Item label="商戶註冊名稱">
                        {getFieldDecorator('companyName', {
                            rules: [{
                                require: true,
                                validator: this.checkApplicant
                            }]
                        })(
                            <Input placeholder="請填寫商戶名稱" />
                        )}
                    </Item>
                    <Item label="商戶類型">
                        {getFieldDecorator('type', {
                            rules: [{
                                require: true
                            }]
                        })(<Group>
                            <Radio value="online">線上</Radio>
                            <Radio value="offline">線下</Radio>
                        </Group>)}
                    </Item>
                    <Item label="信息來源(機構/單位)">
                        {getFieldDecorator('msgOrigin', {
                            initialValue: { organization: 'a', remarks: '' },
                            rules: [{
                                required: true,
                                validator: this.checkMsgOrigin
                            }]
                        })(
                            <RadioInout infoList={infoList} inputPlaceHolder="機構名稱" radioKey="organization" inputKey="remarks" />
                        )}
                    </Item>
                    <Item label="設備需求">
                        {getFieldDecorator('installationNeed', {
                            initialValue: { installation: 'a', picture: '' },
                            rules: [{
                                required: true,
                                validator: this.checkInstallation
                            }]
                        })(
                            <RadioAvatar installationList={installationList} radioKey="installation" />
                        )}
                    </Item>
                    <Item label="分店列表">
                        {getFieldDecorator('installationNeed', {
                            initialValue: { installation: 'a', picture: '' },
                            rules: [{
                                required: true,
                                validator: this.checkInstallation
                            }]
                        })(
                            <RadioSeries branchList={branchList} />
                        )}
                    </Item>
                    <Item wrapperCol={{span: 24}}>
                        <Button htmlType="submit">下一步</Button>
                    </Item>
                </Form>
            </div>
        )
    }
}


const CompanyInfo = Form.create()(CompanyForm)

export default CompanyInfo