import React from 'react';
import Head from "./header";
import ContentExt from "./content";
import FooterExt from "./footer";

import {Layout} from "antd";

export default class LayoutExt extends React.Component {
    render() {
        const {children} = this.props
        console.log(this.props)
        return (
           <Layout>
               <Head />
               <ContentExt children={children}>
               </ContentExt>
               <FooterExt />
           </Layout>
       )
    }
}