import React, { createContext, useState } from 'react'
import { Button, message, Row,} from 'antd'
import styled from 'styled-components'
import ProjectHeader from '../components/ProjectHeader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { HOST } from '../services/api/config'


const PageWrapper = styled.div`
    margin: 25px;
    padding: 25px;
    background-color: #fff
`

export const Context = createContext()


const NewReport = (props) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const getReport = async () => {
        setLoading(true)
        try{
            const response = await axios.post(`${HOST}/reports/cement`, props.projectData)
            message.success("Report creation success")
            navigate(`/reports/${response.data["id"]}`)   
        }catch(e){
            console.error(e)
            message.error("Report Creation Failed!!")
        }finally{
            setLoading(false)
        }
        console.log(props.projectData)
        // 
    }

   
    return (
        <PageWrapper>
            <ProjectHeader {...props.projectData} >            
        </ProjectHeader>   

        {props.children} 
            <Row justify='end'>
                <Button loading={loading} onClick={getReport} size='large' type='primary'> Proceed To Report </Button>   
            </Row>
        </PageWrapper>
    )
}


export default NewReport