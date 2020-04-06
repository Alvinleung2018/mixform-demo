import React from "react";
import PropTypes from 'prop-types';
import {Radio} from 'antd';
const {Group} = Radio;

class RadioSeries extends React.Component {

    state = {
        isShow: false
    }

    handleChange = e => {
        console.log(e)
        const value = e.target.value;
        console.log(value)
        value ? this.setState(state => ({isShow: !state.isShow})) : this.setState(state => ({isShow: !state.isShow}))
    }

    render() {
        const {branchList} = this.props;
        const {isShow} = this.state;
        console.log(isShow)
        return (
            <span>
                <Group onChange={this.handleChange} defaultValue="0">
                    <Radio value='1'>是</Radio>
                    <Radio value="0">否</Radio>
                </Group>
                {
                    isShow ? <div>
                        <Group onChange={this.handleListChange}>
                            {
                                branchList.map(item => {
                                    return(
                                        <Radio key={item.id} value={item.value} >{item.label}</Radio>
                                    )
                                })
                            }
                        </Group>
                    </div> : null
                }
            </span>
        )
    }
}

export default RadioSeries;