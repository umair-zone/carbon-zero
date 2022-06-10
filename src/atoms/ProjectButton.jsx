import {Modal,Form,Button,Input,Select,} from 'antd';
import React, { useState } from 'react';
import RouteButton from './RouteButton';
const { TextArea } = Input;


const ProjectButton = (props) => {
     const [isModalVisible, setIsModalVisible] = useState(false);
     const [form] = Form.useForm();
     
     const showModal = () => {
       setIsModalVisible(true);
     };
   
     const handleOk = () => {
       setIsModalVisible(false);
     };
   
     const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
     };
     
     return (
               <>
               <RouteButton title={props.title} onClick={showModal} />
               <Modal 
                title={props.modaltitle} 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={[ ]}>
      
              <Form
                    form={form}
                    labelCol={{ span: 6,}}
                    wrapperCol={{span: 18,}}
                    layout="horizontal" 
                    autoComplete='off'
                    onFinish={(values) => {
                      console.log(values);
                      form.resetFields();
                      handleOk();
                    }}
                    
                    >
                    <Form.Item 
                      name ="projectName"
                      label="Project Name"
                      rules={[{
                        required:true,
                        message:"Please enter project name"
                        }]}
                    >
                      <Input placeholder='Type Project Name'/>
                    </Form.Item>
                    
                    <Form.Item 
                    name = "projectType"
                    label="Project Type"
                    rules={[{
                      required:true,
                      message:"Please enter project type"
                    }]}
                    >
                      <Select 
                      placeholder="Project Type"
                      name = "projectType"
                      rules={[{
                        required:true,
                        message:"Please select project type"
                    }]}
                      >
                        <Select.Option value="Cement">Cement</Select.Option>
                        <Select.Option value="Highway">Highway</Select.Option>
                        <Select.Option value="Coal">Coal</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item 
                    label="Project Location"
                    name = "projectLocation"
                    rules={[{
                      required:true,
                      message:"Please select a location"
                    }]}
                    >
                      <Select placeholder='Location'>
                          <Select.Option value="demo">Sri Lanka</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item 
                    label="Description"
                    name = "decs"
                    rules={[{
                      required:true,
                      message:"Please enter a description about the project"
                    }]}
                    >
                      <TextArea placeholder="Description" rows={4} />
                    </Form.Item>
                    <Form.Item>
                    </Form.Item>  

                    <Form.Item style={{marginLeft:"240px"}}>
                       <Button key="cancel" onClick={handleCancel}>
                          Cancel
                       </Button>
                       <Button 
                       style={{marginLeft:"10px"}}
                       key="submit" type="primary"
                       htmlType='submit'>
                           {props.btnstate}
                       </Button>
                    </Form.Item>

              </Form>
              </Modal>               
              </>
          );
}
      
export default ProjectButton;