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