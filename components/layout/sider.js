import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
    AuditOutlined,
    PayCircleOutlined,
    PartitionOutlined
} from '@ant-design/icons';

import {getMenu} from "../../data/requstUrl";
import css from './sider.scss'


const { Sider } = Layout;


const getMenuIcon = (icon) => {
    switch (icon) {
        case 'AuditOutlined':
            return <AuditOutlined />
        case 'PayCircleOutlined':
            return <PayCircleOutlined />
        case 'PartitionOutlined':
            return <PartitionOutlined />
    }
}


const Menus = ({menuList}) => {
    return (
        <Menu theme="dark" mode="inline">
            {
                menuList.map(item => {
                    return (
                        item.children && item.children.length > 0
                            ?
                            <Menu.SubMenu key={item.id} icon={getMenuIcon(item.icon)} title={item.title}>
                                {
                                    item.children.map(cItem => {
                                       return (
                                           <Menu.Item key={cItem.id}>
                                               <Link href={cItem.path}>
                                                   <a href="">{cItem.title}</a>
                                               </Link>
                                           </Menu.Item>
                                       )
                                    })
                                }
                            </Menu.SubMenu>
                            :
                            (
                                <Menu.Item key={item.id} icon={getMenuIcon(item.icon)} >
                                    <Link href={item.path}>
                                        <a href="">{item.title}</a>
                                    </Link>
                                </Menu.Item>
                            )
                    )
                })
            }
        </Menu>
    )
}

const Logo = () => (
    <div className={css.logoContainer}>
        <Link href="/">
            <a>
                <img className={css.logo} src="/static/logo.svg" alt=""/>
                <h2 className={css.title}>數據分析</h2>
            </a>
        </Link>
    </div>
)

class LayoutSider extends React.Component {

    state = {
        collapsed: false,
        menuList: []
    }

    getMenuList = () => {
        getMenu().then(res => {
            const {data} = res
            if(data.ok){
                this.setState({menuList: data.result})
            }
        })
    }

    componentDidMount() {
        this.getMenuList()
    }

    render() {
        const {collapsed} = this.props
        const {menuList} = this.state
        console.log(this.state.menuList)
        return(
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Logo />
                <Menus menuList={menuList}/>
            </Sider>
        )
    }
}

export default LayoutSider