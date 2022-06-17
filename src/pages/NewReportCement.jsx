import React, { useState , useEffect } from 'react'
import {Typography , Select  , Form, InputNumber, Button, Table,  Col,} from 'antd'
import styled from 'styled-components'
import ProjectHeader from '../components/ProjectHeader'
import NewReport from './NewReport'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { HOST } from '../services/api/config'

const {Title} = Typography
const {Option} = Select

const {useForm} = Form

const PageWrapper = styled.div`
    margin: 20px;
    padding: 15px;
`

const SelectStyled = styled(Select)`
    width: 200px;
    background-color: red;
`

const ParameterSection = styled.section`
    margin-bottom:50px
`

const NewReportCement = (props) => {

    const {projectId} = useParams()

    const [projectData , setProjectData] = useState({})

    const [manufactureAmount , setManufactureAmount] = useState(1)
    const [CO2Capture , setCO2Capture] = useState(0)
    
    const [energySources, setEnergySources] = useState([])

    
    useEffect(
        () => {
            const fetchProject = async() => {
                const response = await axios.get(`${HOST}/projects/${projectId}`)
                setProjectData(
                    {
                        "projectId": response.data["id"],
                        "projectName": response.data["projectName"],
                        "projectDescription": response.data["projectDescription"],
                        "projectType": response.data["projectTypeId"] === 1 ? "Cement Factory": ""
                    }
                )
            
            }

            fetchProject()
        }, []
    )
    
    
    
    
    const columns = [
        {
            "title": "Energy Source",
            "dataIndex": "energySource",
            "key": "energySource",
        }
        ,

        {
            "title": "Energy Amount (kWh)",
            "dataIndex": "energyAmount",
            "key": "energyAmount",
        }

    ]
    

    const addEnergySource = (value)=> {   
        if (Object.keys(value).length > 0 ) {
            setEnergySources(
                [...energySources, value]
            )
        }
    }


    return (
        <NewReport projectData={{...projectData , "energySources": energySources , 
        "CO2Capture":CO2Capture , "manufactureAmount":manufactureAmount }} 
        >
            <ParameterSection>
                <Title level={3}> Operational Energy Consumption per Month</Title>
                    <Form  layout='inline' onFinish={addEnergySource} >
                        <Col span={8} >
                            <Form.Item label="Energy Source" name="energySource"   >
                                <SelectStyled style={{width:"200px"}} rules = {[ {required:true, message:"Please select type"}]} >
                                    <Option value="coal"> Coal </Option>
                                    <Option value="hydro"> Hydro </Option>
                                    <Option value="wind"> Wind </Option>
                                    <Option value="solar"> Solar </Option>
                                </SelectStyled>
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Amount of Energy" name="energyAmount">
                                <InputNumber addonAfter="kWh" min={1} style={{width:"200px"}}></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col  span={6} >
                            <Button  htmlType="submit"  type='default'>Add Energy Source</Button>
                        </Col>
                    </Form>
                <div style={{ margin:"50px 30px" , boxShadow:"0px 2px 11px rgba(0, 0, 0,0.1)"}}>
                    <Table rowKey="energySource" dataSource={energySources} columns={columns} pagination={false}></Table>
                </div>
            </ParameterSection>
            <ParameterSection>
                <Title level={3}> Manufacturing</Title>
                <Form >
                    <Form.Item label="Cement Manufactured Per Month" name="manufacturePerMonth">
                        <InputNumber value={manufactureAmount} onChange={v => setManufactureAmount(v)} addonAfter="kg" min={1}></InputNumber>
                    </Form.Item>
                </Form>
            </ParameterSection>
            <ParameterSection>
                <Title level={3}>CO2 capturing</Title>
                <Form>
                    <Form.Item label="CO2 Captured Per Month" name="manufacturePerMonth">
                        <InputNumber value={CO2Capture} onChange={v=>setCO2Capture(v)} addonAfter="kg" min={0}></InputNumber>
                    </Form.Item>
                </Form>
            </ParameterSection>
        </NewReport>
    )
}

export default NewReportCement