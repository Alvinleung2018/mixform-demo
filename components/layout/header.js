import React from 'react';
import {Layout, Menu} from 'antd';
import {isMoment} from "moment";
const {Header} = Layout;
import css from './header.scss'

export default class Head extends React.Component {

    componentDidMount() {
        console.log(css)
    }

    render() {
        return (
            <Header style={{backgroundColor: "#FFFFFF"}}>
                <div className={css.container}>
                    <div className={css.logoBox}>
                        <img src="/static/logo.png" width={100} alt=""/>
                        <h1 className={css.title}>商家中心</h1>
                    </div>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px', float: "right" }}
                    >
                        <Menu.Item key="1">註冊</Menu.Item>
                        <Menu.Item key="2">登錄</Menu.Item>
                        <Menu.Item key="3">常見問題</Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }
}