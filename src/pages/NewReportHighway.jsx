import React, { useState } from 'react'
import {Typography , Select  , Form, InputNumber, Button, Table,  Col,} from 'antd'
import styled from 'styled-components'
import NewReport from './NewReport'
import { useForm } from 'antd/lib/form/Form'

const {Title} = Typography



const SelectStyled = styled(Select)`
    width: 200px;
`
const {Option} = SelectStyled

const ParameterSection = styled.section`
    margin-bottom:50px
`

const fuelChoices = [['X', 'Regular gasoline'],
['Z' , 'Premium gasoline'],
['D' , 'Diesel'],
['E' , 'Ethanol (E85)'],
['N' , 'Natural gas']]


const projectData = {
    "projectId": 1,
    "projectName": "Colombo Kandy Highway",
    "projectType": "Highway",
    "projectDescription": "This is some project discription"
}

const NewReportHighway = () => {
    const [highwayVehicleForm] = useForm()
    const [trafficFlow, setTrafficFlow] = useState([])


    const columns = [
        {
            "title": "Engine Size (L)",
            "dataIndex": "engineSize",
            "key": "engineSize",
        }
        ,

        {
            "title": "Number Of Cylinders",
            "dataIndex": "numberOfCylinders",
            "key": "numberOfCylinders",
        }
        ,

        {
            "title": "Fuel Type",
            "dataIndex": "fuelType",
            "key": "fuelType",
        }

        ,
        {
            "title": "No of Vehicles",
            "dataIndex": "numberOfVehicles",
            "key": "numberOfVehicles",
        }

    ]
    

    const addTrafficFlow = (value)=> {   
        if (Object.keys(value).length > 0 ) {
            setTrafficFlow(
                [...trafficFlow, value]
            )

            highwayVehicleForm.resetFields()
        }
    }

    return (
        <NewReport projectData={projectData}>
            <ParameterSection>
                <Title level={3}> Traffic Flow of Highway</Title>
                    <Form form={highwayVehicleForm}  layout='inline' onFinish={addTrafficFlow} >
                        <Col span={4} >
                            <Form.Item label="Engine Size (l)" name="engineSize"   >
                                <InputNumber addonAfter="liter"></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col span={4} >
                            <Form.Item label="Number of Cylinders" name="numberOfCylinders">
                                <InputNumber  min={1} ></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col span={4} >
                            <Form.Item label="Fuel Type" name="fuelType">
                                <SelectStyled>
                                    {
                                        fuelChoices.map(
                                            ([value, text] , index) => <Option key={index} value={value}>{text} ({value})</Option>
                                        )
                                    }
                                </SelectStyled>
                            </Form.Item>
                        </Col>
                        <Col span={4} >
                            <Form.Item label="Number of vehicles" name="numberOfVehicles">
                                <InputNumber min={1} ></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col  span={2} >
                            <Button block  htmlType="submit"  type='default'>Add</Button>
                        </Col>
                    </Form>
                <div style={{ margin:"50px 30px" , boxShadow:"0px 2px 11px rgba(0, 0, 0,0.1)"}}>
                    <Table dataSource={trafficFlow} columns={columns} pagination={false}></Table>
                </div>
            </ParameterSection>
            <ParameterSection>
                <Title level={3}>Area of Deforestration</Title>
                <Form>
                    <Form.Item label="Total Area of Deforestration (M2)" name="manufacturePerMonth">
                        <InputNumber addonAfter="Squre Meters" min={0}></InputNumber>
                    </Form.Item>
                </Form>
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


export default NewReportHighway