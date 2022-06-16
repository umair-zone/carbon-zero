import React from 'react'
import styled from "styled-components"
import { Spin } from 'antd'


const PW = styled.div`margin: 25px;padding: 25px;background-color: #fff`

const PageWrapper = (props) => {
    return (<PW> <Spin tip="Preparing the report..."  spinning={props.loading}>{props.children} </Spin></PW>)
}

const page =  {

    "PageWrapper" :  PageWrapper

} 


export default page