import React from "react";
import {Modal} from "antd";

const TextTitle = () => (<h2 style={{textAlign: 'center' }}>服務協議、隱私權政策及開戶意願確認</h2>)

class ServiceAgreement extends React.Component {

    state = {
        visible: true
    }

    handleOk = () => {
        this.setState({visible: false})
    }

    handleCancel = () => {
        this.setState({visible: false})
    }

    render() {
        const {visible} = this.state;
        console.log(visible)
        return(
            <React.Fragment>
                <Modal
                    title={<TextTitle />}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="同意"
                    cancelText="不同意"
                    // okButtonProps={{ disabled: true }}
                    // cancelButtonProps={{ disabled: true }}
                >
                    <p style={{textIndent: '2em'}}>
                        澳門極易付有限公司將致力保障你的個人資料私隱。
                        為保障閣下個人資料的私隱權，本公司確保在收集、使用、保存、披露、轉移、保密及查閱個人資料的政策，
                        均符合澳門《個人資料保護法》條文的約束和規定。
                    </p>
                    <p style={{textIndent: '2em'}}>
                        本公司收集個人資料的目的是用作提供有關服務和申請服務，包括：
                        (1)客戶服務；如線上線下申請、查詢、建議、投訴、跟進、裝機服務、繳費等。
                        (2)提升服務質素；本公司為提供更優質服務而對客戶進行的意見調查等。
                        (3) 產品宣傳推廣； 推廣本公司最新的產品和服務
                    </p>
                    <br />
                    <br />
                    <p style={{textIndent: '2em'}}>
                        「本人已閱讀及瞭解收集個人資料的目的及使用，同意貴公司使用本人個人資料作直接推廣和申請服務用途。」
                    </p>
                </Modal>
            </React.Fragment>
        )
    }
}


export default ServiceAgreement;