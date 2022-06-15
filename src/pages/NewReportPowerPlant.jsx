import React, { useState } from 'react'
import {Typography , Select  , Form, InputNumber, Button, Table, Col, } from 'antd'
import styled from 'styled-components'

import NewReport from './NewReport'

const {Title} = Typography
const {Option} = Select



const SelectStyled = styled(Select)`
    width: 200px;
    background-color: red;
`

const ParameterSection = styled.section`
    margin-bottom:50px
`


const projectData = {
    "projectId": 1,
    "projectName": "XYZ Power Copration",
    "projectType": "Power Plant",
    "projectDescription": "This is some project discription"
}


const NewReportPowerPlant = () => {

    const [energySources, setEnergySources] = useState([])

    const [coalUsed, setCoalUsed] = useState([])


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

    const coalUsedColumns = [
        {
            "title":"Type of Coal",
            "dataIndex": "typeOfCoal",
            "key":"typeOfCoal"
        }
        ,
        {
            "title":"Amount of Coal",
            "dataIndex": "amountOfCoal",
            "key":"amountOfCoal"
        }
    ]

    const addCoalUsed = (value) => {
        setCoalUsed(
            [...coalUsed , value]
        )
    }
    

    const addEnergySource = (value)=> {   
        if (Object.keys(value).length > 0 ) {
            setEnergySources(
                [...energySources, value]
            )
        }
    }

    return (
        <NewReport projectData={projectData}>
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
                    <Table dataSource={energySources} columns={columns} pagination={false}></Table>
                </div>
            </ParameterSection>
            <ParameterSection>
                <Title level={3}> Manufacturing</Title>
                <Form layout='inline' onFinish={addCoalUsed}>
                    <Col span={6}>
                        <Form.Item label="Type of Coal Used" name="typeOfCoal">
                            <SelectStyled>
                                {["Type 1" , "Type 2"].map(
                                    (type, index)=>  <Option key={index} value={type}>{type}</Option>
                                )}
                            </SelectStyled>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Amount of Coal" name="amountOfCoal">
                            <InputNumber addonAfter="kg" min={1}></InputNumber>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item>
                            <Button block htmlType='submit'> Add</Button>
                        </Form.Item>
                    </Col>
                </Form>
                <div style={{ margin:"50px 30px" , boxShadow:"0px 2px 11px rgba(0, 0, 0,0.1)"}}>
                    <Table dataSource={coalUsed} columns={coalUsedColumns} pagination={false}></Table>
                </div>
            </ParameterSection>
            <ParameterSection>
                <Title level={3}>CO2 capturing</Title>
                <Form>
                    <Form.Item label="CO2 Captured Per Month" name="manufacturePerMonth">
                        <InputNumber addonAfter="kg" min={0}></InputNumber>
                    </Form.Item>
                </Form>
            </ParameterSection>
        </NewReport>
    )
}

export default NewReportPowerPlant