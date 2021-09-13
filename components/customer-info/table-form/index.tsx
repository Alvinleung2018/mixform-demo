import React, {useState} from "react";
import {Table, Modal, Button} from "antd";
import PhoneEditModal from "./phoneEditModal";
import {phoneFormData} from "../../../data/table-data";

const TableForm = () => {

    const [phoneData, setPhoneData] = useState(phoneFormData)
    const [phoneEditModalVisible, setPhoneEditModalVisible] = useState(false)
    const [phoneCreateModalVisible, setPhoneCreateModalVisible] = useState(false)

    const phoneColumns = [
        {
            title: '区号',
            dataIndex: 'areaCode'
        },
        {
            title: '手机号',
            dataIndex: 'phoneNumber'
        },
        {
            title: '默认',
            dataIndex: 'isDefault'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: () => {
                return (
                   <span>
                       <PhoneEditModal visible={phoneEditModalVisible} title="编辑手机号码" handleCancel={phoneEditModalCancel} handleOk={handleEditPhone}>
                           <Button onClick={phoneEditModalOpen}>Edit</Button>
                       </PhoneEditModal>
                   </span>
                )
            }
        }
    ]

    const phoneEditModalOpen = () => {
        setPhoneEditModalVisible(true)
    }

    const phoneEditModalCancel = () => {
        setPhoneEditModalVisible(false)
    }

    const phoneCreateModalOpen = () => {
        setPhoneCreateModalVisible(true)
    }

    const phoneCreateModalCancel = () => {
        setPhoneCreateModalVisible(false)
    }

    // 提交新增手机号表单
    const handleCreatePhone = () => {

    }

    //提交编辑手机号表单
    const handleEditPhone = () => {

    }


    return (
        <>
            <PhoneEditModal title="新增手机号" visible={phoneCreateModalVisible} handleCancel={phoneCreateModalCancel} handleOk={handleCreatePhone}>
                <Button type="primary" onClick={phoneCreateModalOpen}>Create</Button>
            </PhoneEditModal>
            <Table rowKey="phoneTable"
                   dataSource={phoneData}
                   columns={phoneColumns}

            />
            <Table rowKey="emailTable"

            />
            <Table rowKey="addressTable"

            />
        </>
    )
}

export default TableForm