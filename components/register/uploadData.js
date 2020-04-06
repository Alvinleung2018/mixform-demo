import React from "react";
import {Icon, Input, Tag, Button, Upload, Card, Radio} from "antd";

const getBase64 = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class UploadData extends React.Component {

    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            // {
            //     uid: '-2',
            //     name: 'image.png',
            //     status: 'done',
            //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            // },
            // {
            //     uid: '-3',
            //     name: 'image.png',
            //     status: 'done',
            //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            // },
            // {
            //     uid: '-4',
            //     name: 'image.png',
            //     status: 'done',
            //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            // },
            // {
            //     uid: '-5',
            //     name: 'image.png',
            //     status: 'error',
            // },
        ],
    }

    render() {
        const {fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div style={{width: '550px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Upload listType="picture-card"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        fileList={fileList}
                >
                    {uploadButton}
                </Upload>
                <span>
                     <Tag>
                        標註：公司銀行賬戶必須提供，可經資料核實後再提交
                    </Tag>
                </span>
                <Card title="Default size card">
                    <p>122222222222222222222222222222222222222222</p>
                    <Radio>12</Radio>
                    <Button>返回</Button>
                </Card>
            </div>
        );
    }
}

export default UploadData;