import React from 'react'
import styled from "styled-components"
import { Spin } from 'antd'


const PW = styled.div`
    margin: 100px;
    padding: 40px;
    background-color: #1c1c1c;
    color: #fff;
   `

const PageWrapper = (props) => {
    return (<PW className='pageWrapper'> <Spin tip="Preparing the report..."  spinning={props.loading}>{props.children} </Spin></PW>)
}

const page =  {

    "PageWrapper" :  PageWrapper

} 


export default page