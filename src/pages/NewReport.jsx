// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import React, { createContext, useEffect, useState } from 'react'
import { Button, message, Row,  Col,  Table, Form, Select, InputNumber,Typography, Checkbox} from 'antd'
import styled from 'styled-components'
import ProjectHeader from '../components/ProjectHeader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { HOST } from '../services/api/config'
import page from '../atoms/Page'



const { useForm } = Form
const {PageWrapper} = page

const {Title} = Typography



export const Context = createContext()


const NewReport = (props) => {
    const [loading, setLoading] = useState(false)
    const [treeTable , setTreeTable] = useState([])
    const [trees , setTrees] = useState([])
    const [soilTypes, setSoilTypes] = useState([ "Sandy Loamy" , "Black Cotton" , "Clayey", ])
    const [treeForm] = useForm()
    
    const navigate = useNavigate()
    

    useEffect(()=>{
        const fetchTrees = async () => {
            message.loading("Loading...")
            try{
                const response = await axios.get(`${HOST}/trees`)
                setTrees(response.data)
            }catch(e){
                console.log(e)
                message.error("Something went wrong...")
            }finally{
                message.destroy()
            }
  
        }

        fetchTrees()
    }, [])
    
    const getReport = async () => {
        
        if (soilTypes.length === 0){
            message.error("There should be aleast one soil type selected")
            return
        }
        
        setLoading(true)

        const maximum_by_user = {}
        const minimum_by_user = {}

        treeTable.forEach(tree => {
            if (tree["max"] !== null){
                maximum_by_user[tree["id"]] = tree["max"]
            }
            if (tree["min"] !== null){
                minimum_by_user[tree["id"]] = tree["min"]
            }      
        });


        try{
            const response = await axios.post(`${HOST}/reports/cement`, 
            { ...props.projectData, 
                "maxTreesByUser" : maximum_by_user , 
                "minTreesByUser" : minimum_by_user , 
                "soilTypes": soilTypes
              })
            message.success("Report creation success")
            navigate(`/reports/${response.data["id"]}`)   
        }catch(e){
            console.error(e)
            message.error("Report Creation Failed!!")
        }finally{
            setLoading(false)
        }
        
        // 
    }

    const columns = [ 
        { "title": "Tree Name" , "dataIndex":"name" , "key":"name"},
        { "title": "Maximum Number of Trees" , "dataIndex":"max" , "key":"max"},
        { "title": "Minimum Number of Trees" , "dataIndex":"min" , "key":"min"},   
    ]


    const { Option } = Select
   
    const addToTreeTable = (val)=>{
        if (treeTable.filter(({id}) => val["id"] === id ).length > 0){
            message.error("Tree Already Added!")
        }else{
            const tree = trees.filter(v => v["id"] === val["id"])[0]
            setTreeTable([...treeTable , 
                {
                   "id": tree["id"],
                   "max": val["max"],
                   "min": val["min"],
                   "name": tree["name"]
                }
                ]
            )

        }
        treeForm.resetFields()
    }

    const soils = [ "Sandy Loamy" , "Black Cotton" , "Clayey", ]

    const onSoilTypeChange = (e) => {
        if(e.target.checked){
            setSoilTypes(
                [...soilTypes, e.target.value]
            )
        }else{
            setSoilTypes(soilTypes.filter(v => e.target.value !== v))
        }
    }

    return (
        <PageWrapper loading={false}>
            <ProjectHeader {...props.projectData} >            
        </ProjectHeader>   

            {props.children} 
            <Row>
                <Title level={3}>Plantation</Title>
            </Row>
            <Row style={{marginBottom:"20px"}}>
                <div style={{marginRight:"30px"}}>Select Prefred Soil Types : </div>

                {soils.map( soil => <Checkbox defaultChecked value={soil} key={soil} onChange={onSoilTypeChange}>{soil}</Checkbox> )}
            </Row>
            <Row style={{padding:"20px 0"}}>
                <Form form={ treeForm } layout='inline' onFinish= {addToTreeTable}>  
                        <Form.Item name="id" label="Tree">
                            <Select   style={{width:"200px"}}>
                            {
                                trees.map((t,i) => <Option key={t["id"]}  value={t["id"]}> {t["name"]}</Option>)
                            }
                            </Select>
                        </Form.Item>
                    
                    <Form.Item name="min" min={0} label="Minimum">
                        <InputNumber></InputNumber>
                    </Form.Item>

                    <Form.Item name="max" label="Maximum">
                        <InputNumber min={0}></InputNumber>
                    </Form.Item>
                   
                    <Form.Item>
                        <Button htmlType='submint'>Add Tree Type</Button>
                    </Form.Item>
                </Form>            
            </Row>
            <Row style={{marginBottom:"20px"}}>
                <Col span={24}>
                    <Table rowKey="id" dataSource={treeTable} columns={columns}></Table>
                </Col>
            </Row> 
            <Row justify='end'>
                <Button loading={loading} onClick={getReport} size='large' type='primary'> Proceed To Report </Button>   
            </Row>
        </PageWrapper>
    )
}


export default NewReport