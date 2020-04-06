import React from "react";
import LoginForm from "../components/login/login";
import Register from "../components/register/register";


export default class Index extends React.Component{
    render() {
        return(
            <div>
                <Register />
               {/*<LoginForm />*/}
            </div>
        )
    }
}