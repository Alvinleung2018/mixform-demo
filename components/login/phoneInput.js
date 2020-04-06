import React from "react";
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

// class PhoneInput extends React.Component {
//
//     handleSelectChange = areaNumber => {
//         this.triggerChange({areaNumber})
//     }
//
//     handleInputChange = e => {
//         e.stopPropagation()
//         const phoneNumber = e.target.value
//         this.triggerChange({ phoneNumber });
//     }
//
//     triggerChange = changedValue  => {
//         const { onChange, value } = this.props;
//         if (onChange) {
//             onChange({
//                 ...value,
//                 ...changedValue,
//             });
//         }
//     }
//
//     render() {
//         const { Option } = Select;
//         const {areaNumber, phoneNumber} = this.props.value;
//         console.log(this.props)
//         return (
//             <span>
//                 <Select style={{ width: '32%', marginRight: '3%'}}
//                         value={areaNumber}
//                         onChange={this.handleSelectChange}
//                 >
//                     <Option value="00853">00853</Option>
//                     <Option value="00852">00852</Option>
//                     <Option value="0086">0086</Option>
//                 </Select>
//                 <Input type="text"
//                        placeholder="請輸入手機號!"
//                        maxLength={areaNumber === '0086' ? 11 : 8}
//                        style={{ width: '65%', marginRight: '3%' }}
//                        value={phoneNumber}
//                        onChange={this.handleInputChange}
//                 />
//             </span>
//         );
//     }
// }

class PhoneInput extends React.Component {
    handlePhoneNumberChange = e => {
        const phoneNumber = e.target.value;
        if(isNaN(phoneNumber)) {
            return;
        }
        this.triggerChange({ phoneNumber });
    };

    handleAreaNumberChange = areaNumber => {
        console.log(areaNumber)
        this.triggerChange({ areaNumber });
    };

    triggerChange = changedValue => {
        const { onChange, value } = this.props;
        console.log(value)
        if (onChange) {
            onChange({
                ...value,
                ...changedValue,
            });
        }
    };

    render() {
        const { size, value } = this.props;
        return (
            <span style={{width: '276px'}}>
                <Select value={value.areaNumber}
                        size={size}
                        style={{ width: '32%', marginRight: '3%' }}
                        onChange={this.handleAreaNumberChange}
                 >
                    <Option value="00853">00853</Option>
                    <Option value="00852">00852</Option>
                    <Option value="0086">0086</Option>
                </Select>
                <Input type="text"
                       size={size}
                       value={value.phoneNumber}
                       onChange={this.handlePhoneNumberChange}
                       maxLength={value.areaNumber === '0086' ? 11 : 8}
                       style={{ width: '64%'}}
                />
            </span>
        );
    }
}

export default PhoneInput;