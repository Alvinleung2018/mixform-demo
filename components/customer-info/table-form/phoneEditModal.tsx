import React from "react";
import {Modal, Input, Form, Select} from "antd";
import {areaCodeList, isDefaultList} from "../../../data/select-data";

const {Item} = Form
const {Option} = Select

const PhoneEditModal = ({children, visible, title, handleCancel, handleOk}) => {

    const [form] = Form.useForm()

    return (
        <>
            <Modal visible={visible} onCancel={handleCancel} onOk={handleOk} title={title}>
                <Form form={form}>
                    <Item label="区号" name="areaCode">
                        <Select>
                            {
                                areaCodeList.map((item: any) => {
                                    return <Option key={item.id} value={item.value}>{item.value}</Option>
                                })
                            }
                        </Select>
                    </Item>
                    <Item label="手机号" name="phoneNumber">
                        <Input />
                    </Item>
                    <Item label="默认" name="isDefault">
                        <Select>
                            {
                                isDefaultList.map((item: any) => {
                                    return <Option key={item.id} value={item.value}>{item.value}</Option>
                                })
                            }
                        </Select>
                    </Item>
                </Form>
            </Modal>
            {children}
        </>
    )
}

export default PhoneEditModal
