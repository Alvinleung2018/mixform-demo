import React from "react";
import {Button, Form, Input} from "antd";
const {Item} = Form;

import BaseForm from "../components/baseForm/baseForm";
import User from "../components/baseForm/user"

class Home extends React.Component {

    render() {
        const itemInfo = [
            {
                Item: Item,
                name: 'abc',
                Com: <Input placeholder="請輸入" />,
                validator: (rule, value, callback) => {
                    console.log(value)
                }
            },
            {
                Item: Item,
                name: 'qwe',
                Com: <Input placeholder="請輸入" />
            },
            {
                Item: Item,
                name: 'btn',
                Com: <Button htmlType="submit">提交</Button>
            }
        ]


        return(

            <div>
                {/*<BaseForm*/}

                {/*>*/}

                {/*</BaseForm>*/}
                <User />
            </div>
        )
    }
}



export default Home