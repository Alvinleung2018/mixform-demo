import React from 'react'
import Link from 'next/link'
import {Breadcrumb as Origin} from "antd";

import css from './breadCrumb.scss'

const {Item} = Origin

const BreadCrumb = () => {
    return(
        <Origin className={css.breadcrumb}>
            <Item>HOME</Item>
            <Item>DOC</Item>
        </Origin>
    )
}


export default BreadCrumb