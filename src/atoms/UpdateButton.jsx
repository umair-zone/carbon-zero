import {Modal,Form,Button,Input,Select,} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';
import axios from 'axios';
const { TextArea } = Input;

class UpdateButton extends React.Component {
   
  constructor(props){
    super(props)
    this.state = {
        isModalVisible:false,
        id:"",
        projectName:"",
        projectTypeId:"",
        projectLocation:"",
        projectDescription:"",
        projectCreatedby:"",
        createdAt:"",
    }
    this.handleChangevar1 = this.handleChangevar1.bind(this);
    this.handleChangevar2 = this.handleChangevar2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    showModal=()=>{
     this.setState({
       isModalVisible:true
      });
      
    }
  
    handleOk=()=> {
      this.setState({isModalVisible:false} );
    }
  
    handleCancel=()=> {
        this.setState({
          isModalVisible:false,
          id:"",
          projectId:"",
          projectName:"",
          projectTypeId:"",
          projectLocation:"",
          projectDescription:"",
          projectCreatedby:"",
          createdAt:"",
         });
    }      

    handleChangevar1=(event)=> {this.setState({projectName: event.target.value});  }
    handleChangevar2=(event)=> {this.setState({projectDescription: event.target.value});  }

    handleSubmit=()=> {
                axios.put(`http://127.0.0.1:8000/projects/changeProject/${this.props.projectId}`, {
                  id : this.props.projectId,
                  projectName: this.state.projectName,
                  projectTypeId: this.state.projectTypeId,
                  projectDescription:this.state.projectDescription,
                  projectCreatedby: " ",
                  projectLocation: this.state.projectLocation,
                })
                .then((response) => {
                  console.log(response);
                  this.handleCancel();
                }).catch((err)=>{
                  console.log(err)
               })
    }

    
    componentDidMount() {
          axios.get(`http://127.0.0.1:8000/projects/${this.props.projectId}`)
            .then(res => {
              const projects = res.data;
              this.setState({ 
                projectId : this.props.projectId,
                projectName: projects["projectName"],
                projectTypeId:projects["projectTypeId"],
                projectDescription:projects["projectDescription"],
                projectLocation:projects["projectLocation"],
                projectCreatedby:projects["projectCreatedby"],
                createdAt:projects["createdAt"],
              });

            }).catch((err)=>{
               alert(err)
            })
        }

     render(){
          
          return (
               <>
               <RouteButton btnType ={this.props.btnType} 
               title={this.props.title}
                onClick={this.showModal} />
               <Modal 
                title={this.props.modaltitle} 
                visible={this.state.isModalVisible} 
                onOk={this.handleOk} 
                onCancel={this.handleCancel}
                footer={[ ]}>
      
              <Form
                    labelCol={{ span: 6,}}
                    wrapperCol={{span: 18,}}
                    layout="horizontal" 
                    autoComplete='off'
                    onFinish={this.handleSubmit}              
                    >

                    <Form.Item 
                      name ="projectName"
                      label="Project Name"
                      value={this.state.projectName}
                      onChange={this.handleChangevar1}
                      rules={[{
                        required:false,
                        message:"Please enter project name"
                        }]}
                      >
                      <Input defaultValue={this.state.projectName} />
                    </Form.Item>
                    
                    <Form.Item 
                    name = "projectTypeId"
                    label="Project TypeId"

                    rules={[{
                      required:false,
                      message:"Please enter project type"
                    }]}
                    >
                      <Select 
                      placeholder="Project Type"
                      name = "projectTypeId"
                      value={this.state.projectTypeId}
                      defaultValue={this.state.projectTypeId}
                      onChange={(value) => {
                        this.setState({projectTypeId: value})
                      }} 
                      rules={[{
                        required:false,
                        message:"Please select project type"
                    }]}
                      >
                        <Select.Option value="1" >Cement Manufacturer</Select.Option>
                        <Select.Option value="2" >Highway</Select.Option>
                        <Select.Option value="3" >Power Plant</Select.Option>
                      </Select>
                    </Form.Item>

                    <Form.Item 
                    label="Project Location"
                    name = "projectLocation"

                    rules={[{
                      required:false,
                      message:"Please select a location"
                    }]}
                    >
                      <Select name="projectLocation" placeholder='Location'
                        value={this.state.projectLocation}
                        defaultValue={this.state.projectLocation}
                        onChange={(value) => {
                            this.setState({projectLocation: value})
                        }} 
                      >
                          
                          <Select.Option  value="Sri Lanka">Sri Lanka</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item 
                    label="Description"
                    name = "projectDescription"
                    value={this.state.projectDescription}
                    
                    onChange={this.handleChangevar2}
                    rules={[{
                      required:false,
                      message:"Please enter a description about the project"
                    }]}
                    >
                    <TextArea defaultValue={this.state.projectDescription} placeholder="Description" rows={4} />
                    </Form.Item>
                    <Form.Item>
                    </Form.Item>  

                    <Form.Item style={{marginLeft:"240px"}}>
                       <Button key="cancel" onClick={this.handleCancel}>
                          Cancel
                       </Button>
                       <Button 
                       style={{marginLeft:"10px"}}
                       key="submit" type="primary"  value="Submit"
                       htmlType='submit'>
                           {this.props.btnstate}
                       </Button>
                    </Form.Item>

              </Form>
              </Modal>               
              </>
          );
    }
}      
export default UpdateButton;