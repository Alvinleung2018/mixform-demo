import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import AuthLayout from "../layout/layout";
import Login from "../login/login";
import {userLogin} from "../../data/requstUrl";
import login from "../../mock/login";

const LoginState = {
    Login: 1,
    LoginOut: 2,
    Null: 3
}


class Application extends React.Component{

    state = {
        status: 1
    }

    handleFinish = (value) => {
        const _this = this
        console.log(value)
        const {username, password} = value
        userLogin(username, password).then(res => {
            console.log(res)
            const {data} = res
            if(data.ok && data.code === 200) {
                console.log('eqwewq')
                _this.setState({status: LoginState.Login})
            }
        })
    }

    render() {
        const {status} = this.state
        const {Component} = this.props
        console.log(status)
        let Comp;
        switch (status) {
            case LoginState.Login:
                return (<AuthLayout Component={Component} />)
                break
            case LoginState.LoginOut:
                return (<Login onFinish={this.handleFinish} />)
                break
            default:
                return null
        }

        // return (
        //     <React.Fragment>
        //         {Comp}
        //     </React.Fragment>
        // )
    }
}

export default Application