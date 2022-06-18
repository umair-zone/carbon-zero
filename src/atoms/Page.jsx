// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import React from 'react'
import styled from "styled-components"
import { Spin } from 'antd'


const PW = styled.div`
    margin: 100px;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.6);
   `

const PageWrapper = (props) => {
    return (<PW className='pageWrapper'> <Spin tip="Preparing the report..."  spinning={props.loading}>{props.children} </Spin></PW>)
}

const page =  {

    "PageWrapper" :  PageWrapper

} 


export default page