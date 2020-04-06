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
        const organization = e.target.value
        const _this = this;
        for(var i = 0; i < infoList.length; i++) {
            if(infoList[i].remarks && infoList[i].value == organization) {
                _this.setState({isShow: true})
            }else{
                _this.setState({isShow: false})
            }
        }
        _this.setState({value: organization});
        this.triggerChange({organization})
    }

    triggerChange = changedValue => {
        const { onChange, value } = this.props
        if (onChange) {
            onChange({...value,...changedValue})
        }
    };

    inputChange = (e) => {
        const remarks = e.target.value
        this.triggerChange({remarks})
    }

    componentDidMount() {
        // const {infoList} = this.props;
        // const _this = this;
        // for(var i = 0; i < infoList.length; i++) {
        //     if(infoList[i].isDefault) {
        //         _this.setState({value: infoList[i].value})
        //     }
        // }
    }

    setDefaultValue =  () => {
        const {infoList} = this.props;
        const _this = this;
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
                                 <Radio value={item.value} >{item.label}</Radio>
                             )
                         })
                     }
                </Group>
                {isShow ? <Input placeholder={inputPlaceHolder} onChange={this.inputChange} /> : null}
            </span>
        )
    }
}

export default RadioInput