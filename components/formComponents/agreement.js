import React from "react";
import PropTypes from 'prop-types';
import {Card, Radio, Button} from "antd";
import css from './agreement.scss';
const {Group} = Radio;

class Agreement extends React.Component {

    state = {
        isDisabled: true,
        value: ''
    }

    handleRadioChange = e => {
        const value = e.target.value;
        this.setState({value: value});
    }

    render() {
        const {value} = this.state;
        const {title, contentText, point} = this.props;
        return(
            <div className={css.container}>
                <Card title={title} bordered={false}>
                    <div className={css.content}>
                        {contentText()}
                    </div>
                    <Group className={css.group} onChange={this.handleRadioChange} value={value}>
                        <Radio value="1" className={css.radioStyle}>
                            我已阅读并同意<span className={css.text}>{point}</span>声明
                        </Radio>
                    </Group>
                    <div className={css.btn}>
                        <Button className={css.returnBtn}>返回</Button>
                        <Button type="primary" className={css.nextBtn} disabled={value ? false: true}>下一步</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

Agreement.propTypes = {
    title: PropTypes.string,
    contentText: PropTypes.func,
    point: PropTypes.string
}


export default Agreement;