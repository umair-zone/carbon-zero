import React, { useState } from 'react'
import {Typography , Select  , Form, InputNumber, Button, Table, Row, Col, Space, Divider,} from 'antd'
import styled from 'styled-components'

const {Title} = Typography
const {Option} = Select

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


const NewReportHighway = () => {

    const [energySources, setEnergySources] = useState([
        {
            "energySource": "coal",
            "energyAmount": 1000
        }
    ])


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
        <PageWrapper>
            <Title level={2} >Project Name - Project Type</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ligula ac diam iaculis efficitur non vel mi. Maecenas sed mi vitae risus suscipit rhoncus. Aenean laoreet sit amet sem at dignissim. Duis varius velit id odio egestas, at congue enim gravida. Pellentesque nec est nulla. Donec mauris purus, tincidunt eget malesuada imperdiet, vestibulum ac nisi. Sed cursus posuere erat, non accumsan nisl aliquet vitae.</p>  
            <Divider/>
            <ParameterSection>
                <Title level={3}> Traffic Flow of Highway</Title>
                    <Form  layout='inline' onFinish={addEnergySource} >
                        <Col span={4} >
                            <Form.Item label="Engine Size (l)" name="engineSize"   >
                                <InputNumber addonAfter="liter"></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col span={4} >
                            <Form.Item label="Number of Cylinders" name="numberOfCycinders">
                                <InputNumber  min={1} ></InputNumber>
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
                    <Table dataSource={energySources} columns={columns} pagination={false}></Table>
                </div>
            </ParameterSection>
            <ParameterSection>
                <Title level={3}> Manufacturing</Title>
                <Form>
                    <Form.Item label="Cement Manufactured Per Month" name="manufacturePerMonth">
                        <InputNumber addonAfter="kg" min={1}></InputNumber>
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
            <Row justify='end'>
                <Button type='primary'> Proceed To Report </Button>
            </Row>
        </PageWrapper>
    )
}


export default NewReportHighway