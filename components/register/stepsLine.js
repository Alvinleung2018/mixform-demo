import React from "react";
import { Steps } from 'antd';
const { Step } = Steps;

class StepsLine extends React.Component {

    state = {
        current: 1
    }

    render() {
        console.log(this.props)
        const {currentStep} = this.props
        return(
            <Steps style={{width: '800px', margin: '0 auto', marginTop: '100px'}} current={currentStep}>
                <Step title="申請註冊"  />
                <Step title="完善申請人信息"  />
                <Step title="填寫企業信息"  />
                <Step title="進件完成"  />
            </Steps>
        )
    }
}

export default StepsLine;