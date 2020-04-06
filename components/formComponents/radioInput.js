import React from "react";
import PropTypes from 'prop-types';
import {Input, Radio} from 'antd';
const {Group} = Radio;

class RadioInput extends React.Component {

    state = {
        value: '',
        isShow: false
    }

    handleChange = e => {
        const {infoList} = this.props
        const value = e.target.value
        const {radioKey} = this.props
        const changedValue = {
            [radioKey] : value
        }
        const _this = this;
        for(var i = 0; i < infoList.length; i++) {
            if(infoList[i].remarks && infoList[i].value == value) {
                _this.setState({isShow: true})
            }else{
                _this.setState({isShow: false})
            }
        }
        _this.setState({value: value});
        this.triggerChange(changedValue)
    }

    triggerChange = changedValue => {
        const { onChange, value } = this.props
        console.log(value)
        if (onChange) {
            onChange({...value,...changedValue})
        }
    };

    inputChange = (e) => {
        const value = e.target.value
        const {inputKey} = this.props
        const changedValue = {
            [inputKey] : value
        }
        this.triggerChange(changedValue)
    }

    setDefaultValue =  () => {
        const {infoList} = this.props;
        let defaultValue = ''
        for(var i = 0; i < infoList.length; i++) {
            if(infoList[i].isDefault) {
                defaultValue = infoList[i].value
            }
        }
        return defaultValue
    }

    render() {
        const {infoList, inputPlaceHolder} = this.props
        const {isShow, value} = this.state
        return(
            <span>
                <Group onChange={this.handleChange} defaultValue={this.setDefaultValue()}>
                     {
                         infoList.map(item => {
                             return(
                                 <Radio key={item.id} value={item.value} >{item.label}</Radio>
                             )
                         })
                     }
                </Group>
                {isShow ? <Input placeholder={inputPlaceHolder} onChange={this.inputChange} /> : null}
            </span>
        )
    }
}

RadioInput.propTypes = {
    infoList: PropTypes.array,
    inputPlaceHolder: PropTypes.string,
    radioKey: PropTypes.string,
    inputKey: PropTypes.string,
}

export default RadioInput