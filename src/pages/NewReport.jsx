import React from 'react'
import { Button, Row,} from 'antd'
import styled from 'styled-components'
import ProjectHeader from '../components/ProjectHeader'
import { Link, useNavigate } from 'react-router-dom'


const PageWrapper = styled.div`
    margin: 25px;
    padding: 25px;
    background-color: #fff
`




const NewReport = (props) => {
    const navigate = useNavigate()
    const getReport = () => {
        navigate(`/projects/1/reports/xxxx`)
    }

    return (
        <PageWrapper>
            <ProjectHeader {...props.projectData} ></ProjectHeader>   
            {props.children}
            <Row justify='end'>
                <Button onClick={getReport} size='large' type='primary'> Proceed To Report </Button>   
            </Row>
        </PageWrapper>
    )
}


export default NewReport