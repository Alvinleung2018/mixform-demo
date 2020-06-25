import React from 'react'
import PropTypes from 'prop-types';
import { Layout, ConfigProvider } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import css from './layout.scss'



class AuthLayout extends React.Component {

    state = {
        collapsed: false,
    };

    handleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {Component} = this.props
        const {collapsed} = this.state
        return (
            <Layout className={css.layoutContainer}>
                <Sider collapsed={collapsed} />
                <Layout>
                    <Header collapsed={collapsed} onCollapse={this.handleCollapse} />
                    <Content Component={Component} />
                </Layout>
            </Layout>
        )
    }
}


export default AuthLayout