import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

class LayoutSider extends React.Component {

    state = {
        collapsed: false
    }

    render() {
        const {collapsed} = this.props
        return(
            <Sider trigger={null} collapsible collapsed={collapsed}>

            </Sider>
        )
    }
}

export default LayoutSider