import React, { createContext, useState } from 'react'
import { Button, message, Row,  Col,  Table, Form, Select} from 'antd'
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
    const [trees , setTrees] = useState()
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

    const columns = [ 
        { "title": "Tree Name" , "dataIndex":"name" , "key":"name"},
        { "title": "Maximum Number of Trees" , "dataIndex":"max" , "key":"max"},
        { "title": "Minimum Number of Trees" , "dataIndex":"min" , "key":"min"},   
    ]


    const { Option } = Select
   
    return (
        <PageWrapper>
            <ProjectHeader {...props.projectData} >            
        </ProjectHeader>   

            {props.children} 
            {/* <Row>
                <Form>
                    <Form.Item label="Tree">
                        <Select>
                            {}
                            <Option></Option>

                        </Select>
                    </Form.Item>
                    <Form.Item label="Maximum">
                        <Select>

                        </Select>
                    </Form.Item>
                    <Form.Item label="Minimum">
                        <Select>

                        </Select>
                    </Form.Item>
                </Form>            
            </Row> */}
            <Row>
                <Col span={24}>
                    <Table columns={columns}></Table>
                </Col>
            </Row>
            <Row justify='end'>
                <Button loading={loading} onClick={getReport} size='large' type='primary'> Proceed To Report </Button>   
            </Row>
        </PageWrapper>
    )
}


export default NewReport