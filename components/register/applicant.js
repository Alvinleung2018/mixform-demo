import React from "react";
import {Form, Select, Input, Radio, Button,} from 'antd';
const {Group} = Radio;
class Applicant extends React.Component {

    state = {
        isShow: false,
        value: 'a',
    }

    handleIDCardChange = e => {
        const IDCard = e.target.value
        this.triggerChange({IDCard})
    }

    handleChange = e => {
        const applicantType = e.target.value
        this.setState({value: applicantType})
        applicantType === 'c' ? this.setState({isShow: true}) : this.setState({isShow: false})
        this.triggerChange({applicantType})
    }

    triggerChange = changedValue => {
        const { onChange, value } = this.props;
        console.log(changedValue)
        console.log(value)
        // if (onChange) {
        //     onChange({
        //         ...value,
        //         ...changedValue,
        //     });
        // }
    };

    render() {
        const {isShow, value} = this.state
        const infoList = [
            {
                label: '企業主',
                value: 'a',
                isDefault: true,
                remarks: false
            },
            {
                label: '股東',
                value: 'b',
                isDefault: false,
                remarks: false
            },
            {
                label: '代辦人',
                value: 'c',
                isDefault: false,
                remarks: true
            }
        ]
        return(
            <span>
                <Group
                    onChange={this.handleChange}
                >
                    <Radio value="a" >企業主</Radio>
                    <Radio value="b" >股東</Radio>
                    <Radio value="c" >代辦人</Radio>
                </Group>
                {isShow ? <Input placeholder="代辦人身份證號碼"
                                 onChange={this.handleIDCardChange} /> : null}
            </span>
        )
    }
}

export default Applicant