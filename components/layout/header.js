import React from "react";
import { Icon, Menu, Dropdown, Modal, Layout, Avatar } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import css from './header.scss'

const { Header } = Layout;

class LayoutHeader extends React.Component{
    render() {
        const {onCollapse, collapsed} = this.props
        return (
            <Header style={{background: '#fff'}}>
                {
                    collapsed
                        ?
                        <MenuUnfoldOutlined className={css.trigger} onClick={onCollapse} />
                        :
                        <MenuFoldOutlined className={css.trigger} onClick={onCollapse} />
                }
            </Header>
        )
    }
}

export default LayoutHeader