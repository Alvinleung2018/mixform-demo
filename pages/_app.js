import React from 'react'
import Head from 'next/head'
import App, {Container} from 'next/app'

import 'antd/dist/antd.css';
import '../mock'
import AuthLayout from "../components/layout/layout";


class DataSystemApp extends React.Component {
    render() {
        const {Component} = this.props;
        return (
            <React.Fragment>
                <Head>
                    <meta content="text/html;charset=UTF-8"/>
                    <meta name="applicable-device" content="pc,mobile"/>
                    <meta content="width=device-width,initial-scale=1,user-scalable=no"
                          name="viewport"/>
                    <title>DataSystem</title>
                    <style>
                        {"#__next {height:100%; width: 100%;background-color: #fff;};"}
                    </style>
                </Head>
                <AuthLayout Component={Component} />

            </React.Fragment>
        )
    }
}

export default DataSystemApp