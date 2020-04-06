import React from 'react'
import {Form, Button, Input} from "antd";
const {Item} = Form

const itemInfo = [
    {
        name: 'abc',
        Com: <Input placeholder="請輸入" />,
        validator: (rule, value, callback) => {
            console.log(value)
        }
    },
    {
        name: 'qwe',
        Com: <Input placeholder="請輸入" />
    }
]


class User extends React.Component {

    renderFormItem = (itemInfo) => {
        const {form} = this.props;
        itemInfo.map(source => {
            const { name, Com, validator} = source
            return(
                <Item>
                    {form.getFieldDecorator(name, {rules: [{
                            validator: validator
                        }]})(Com)}
                </Item>
            )
        })

    }

    render() {
        const { getFieldProps, getFieldError, isFieldValidating, getFieldDecorator } = this.props.form;
        return(
            // <div>
            //     {this.renderFormItem(itemInfo)}
            // </div>
            // <div>
            //     <Item label="微信號/微信電話">
            //         {getFieldDecorator('wechat', {})(
            //             <Input placeholder="請填寫微信號/微信電話" />
            //         )}
            //     </Item>
            //     <Item label="微信號/微信電話">
            //         {getFieldDecorator('qq', {})(
            //             <Input placeholder="請填寫微信號/微信電話" />
            //         )}
            //     </Item>
            // </div>
            <Form>
                {this.renderFormItem(itemInfo)}
            </Form>

        )
    }
}

const a  = Form.create()(User)

export default a