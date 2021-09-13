import React, {useRef, useState} from "react";
import {Button, Card, Tabs, Form, Row, Col} from "antd";
import {WarningOutlined} from '@ant-design/icons'
import _pick from 'lodash/pick'
import _head from 'lodash/head'
import HolderMsg from "./holder-msg";
import OtherMsg from "./other-msg";
import AccountMsg from "./account-msg";
import UpdateForm from "./table-form";
import FooterToolbar from "../footer-tool-bar";
import {findSameElementInArray} from "../../utils/tools";
import {requireNameObj, allFormList} from "../../data/is-require-name";
import {tabPaneKeyObj} from "../../data/tabpane-key-data";
import {holderMsgNameList, otherMsgNameList, accountMsgNameList} from "../../data/form-item-name";
import {useCustomerInfo} from "./store/useCustomerInfo";
import store from "../../store/store";
import {submitAccountMsg, submitHolderMsg, submitOtherMsg} from "../../api/request";
import {log} from "util";

const { TabPane } = Tabs;
const {Item} = Form

const CustomerInfo = () => {

    const [form] = Form.useForm()
    const [holderMsgErr, setHolderMsgErr] = useState(false),
        [otherMsgErr, setOtherMsgErr] = useState(false),
        [accountMsgErr, setAccountMsgErr] = useState(false)
    const [hasMsgErr, setMsgErr] = useState(false)

    const [activeKey, setActiveKey] = useState('tableForm')
    const {updateHolderMsgData, updateOtherMsgData, updateAccountMsgData} = useCustomerInfo()

    const handleFinish = (value: any) => {
        // 筛选各表单中的value
        const {customerInfo} = store.getState()
        const originCustomerInfoData = customerInfo.toJS()
        const {holderMsgData, otherMsgData, accountMsgData} = originCustomerInfoData
        // 提交持有人信息数据
        submitHolderMsg(holderMsgData)
        submitOtherMsg(otherMsgData)
        submitAccountMsg(accountMsgData)
        // 清除错误提示
        setHolderMsgErr(false)
        setOtherMsgErr(false)
    }

    const handleFinishFailed = () => {
        form.validateFields().then(res => {
        }).catch(err => {
            const errorNameList: any[] = []
            err.errorFields.forEach((item: any) => {
                if(item.errors.length !== 0) {
                    errorNameList.push(item.name[0])
                }
            })
            // 验证不通过的表单
            const hasErrFormList = findSameElementInArray(requireNameObj, errorNameList)
            console.log(hasErrFormList)
            setActiveKey(hasErrFormList[0])
            const firstForm =_head(hasErrFormList)
            const firstFormArr = firstForm.split(' ')

            allFormList.forEach(el => {
                console.log('el', el)
                firstFormArr.forEach(item => {
                    console.log('item', item)
                    console.log(el === item)
                    console.log('item === \'otherMsg\'',item === 'otherMsg')
                    if(el === item && item === 'holderMsg') {
                        setHolderMsgErr(true)

                    }
                    if(hasErrFormList.indexOf('holderMsg') < 0) {
                        setHolderMsgErr(false)

                    }
                    if(el === item && item === 'otherMsg') {
                        setOtherMsgErr(true)
                    }
                    if(hasErrFormList.indexOf('otherMsg') < 0) {
                        setOtherMsgErr(false)

                    }
                    if(el === item && item === 'accountMsg') {
                        setAccountMsgErr(true)

                    }
                    if(hasErrFormList.indexOf('accountMsg') < 0) {
                        setAccountMsgErr(false)

                    }
                })
            })
        })
    }

    const handleValuesChange = (_: any, allValues: any) => {
        // 当用户改变数据时实时存储到store
        const holderMsgValue = _pick(allValues, holderMsgNameList)
        const otherMsgValue = _pick(allValues, otherMsgNameList)
        const accountMsgValue = _pick(allValues, accountMsgNameList)
        updateHolderMsgData(holderMsgValue)
        updateOtherMsgData(otherMsgValue)
        updateAccountMsgData(accountMsgValue)
    }

    const handleTabsChange = (activeKey: string) => {
        setActiveKey(activeKey)
    }

    return (
        <>
            <Card title="客户信息">
                <Tabs defaultActiveKey="tableForm" activeKey={activeKey} onChange={handleTabsChange}>
                    <TabPane forceRender tab={holderMsgErr ? errStyleNode('持有人信息') : '持有人信息'} key="holderMsg">
                        <HolderMsg form={form} />
                    </TabPane>
                    <TabPane forceRender tab={otherMsgErr ? errStyleNode('其他信息') : '其他信息'} key="otherMsg">
                        <OtherMsg form={form} />
                    </TabPane>
                    <TabPane forceRender tab={accountMsgErr ? errStyleNode('账户信息') : '账户信息'} key="accountMsg">
                        <AccountMsg form={form} />
                    </TabPane>
                    <TabPane forceRender key="tableForm" tab={"表格"}>
                        <UpdateForm />
                    </TabPane>
                </Tabs>

            </Card>
            <FooterToolbar>
                <Row>
                    <Col style={{marginRight: '30px'}}>
                        <Button type="default">
                            保存
                        </Button>
                    </Col>
                    <Col>
                        <Form onValuesChange={handleValuesChange} style={{display: 'inline-block', lineHeight: '56px'}} form={form} onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
                            <>
                                <Item>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Item>
                            </>
                        </Form>
                    </Col>
                </Row>
            </FooterToolbar>
        </>
    )
}

const errStyleNode = (tabTitle: string) => {
    return (
        <span style={{color: 'red'}}>
            <WarningOutlined />
            {tabTitle}
        </span>
    )
}

export default CustomerInfo