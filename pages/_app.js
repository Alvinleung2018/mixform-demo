import React from 'react'
import Head from 'next/head'
import App, {Container} from 'next/app'
import LayoutExt from "../components/layout/layout";
import 'antd/dist/antd.css';
import './style.css'

class MerchantSigningSystem extends App {
    render() {
        const {Component, pageProps} = this.props;
        console.log(this.props)
        console.log(this.props.pageProps)
        return (
            <Container>
                <LayoutExt>
                    <Component {...pageProps} />
                </LayoutExt>
            </Container>
        )
    }
}

export default MerchantSigningSystem;