import React from "react";
import { Layout } from "antd";


const { Content } = Layout;

class LayoutContent extends React.Component{
    render() {
        const {Component} = this.props
        return (
            <Content>
                <Component />
            </Content>
        )
    }
}

export default LayoutContent