import React from 'react'
import {Button} from "antd";
// import "../mock"

import {getMenu, createUser} from "../data/requstUrl";
import menuAPI from "../mock/menu"
import axios from 'axios'


class Index extends React.Component{

    componentDidMount() {
        // getMenu().then(res => {
        //     console.log(res)
        // })
        console.log(menuAPI)
        const id = 1
        // axios.get('/api/menu', {
        //     params: {
        //         id: id
        //     },
        //     headers: {'Content-type': 'application/json'}
        // }).then(res => {
        //     console.log(res)
        // })
        createUser(1,'xiaoxiao','18').then(res=> {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <Button>123</Button>
                <img src="/static/icon2.png" alt=""/>
            </div>
        )
    }
}

export default Index