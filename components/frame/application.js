import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import AuthLayout from "../layout/layout";
import Login from "../login/login";

const LoginState = {
    Login: 1,
    LoginOut: 2,
    Null: 3
}


class Application extends React.Component{

    state = {
        status: 1
    }

    render() {
        const {status} = this.state
        const {Component} = this.props
        let Comp;
        switch (status) {
            case LoginState.Login:
                Comp = (<AuthLayout Component={Component} />)
                break
            case LoginState.LoginOut:
                Comp = (<Login />)
                break
            default:
                Comp = null
        }
        console.log(Comp)
        return (
            <React.Fragment>
                {Comp}
            </React.Fragment>
        )
    }
}

export default Application