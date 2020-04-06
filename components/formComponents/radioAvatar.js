import React from "react";
import PropTypes from 'prop-types';
import {Radio, Avatar} from "antd";
const {Group} = Radio;

class RadioAvatar extends React.Component {

    handleChange = e => {
        const {installationList} = this.props
        const value = e.target.value
        const {radioKey} = this.props
        const changedValue = {
            [radioKey] : value
        }
        const _this = this;
        for(var i = 0; i < installationList.length; i++) {
            if(installationList[i].remarks && installationList[i].value == value) {
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
        if (onChange) {
            onChange({...value,...changedValue})
        }
    };

    setDefaultValue =  () => {
        const {installationList} = this.props;
        let defaultValue = ''
        for(var i = 0; i < installationList.length; i++) {
            if(installationList[i].isDefault) {
                defaultValue = installationList[i].value
            }
        }
        return defaultValue
    }

    render() {
        const {installationList} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <span>
                <Group onChange={this.handleChange} defaultValue={this.setDefaultValue()}>
                   {
                       installationList.map(item => {
                           return(
                               <div key={item.id} style={{display: 'flex', width: '300px', justifyContent: 'space-between', paddingBottom: '30px'}}>
                                   <Radio style={radioStyle} value={item.value} >{item.label}</Radio>
                                   <Avatar shape="square" size={100} src={item.picSrc} />
                               </div>
                           )
                       })
                   }
                </Group>

            </span>
        )
    }
}

RadioAvatar.propTypes = {
    installationList: PropTypes.array,
    radioKey: PropTypes.string
}

export default RadioAvatar