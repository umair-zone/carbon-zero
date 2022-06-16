import React /*, { useState } */ from 'react';
import {Layout,Form,Input,Row} from 'antd';
import ProjectCard from  '../atoms/ProjectCard'
import ProjectButton from '../atoms/ProjectButton';
import styled from 'styled-components';
//import {SERVER_URL} from "../Config";
import page from '../atoms/Page'
import axios from 'axios';


const { PageWrapper } =  page



const { Search } = Input;

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;

const StyledSearch = styled(Search)`
       alignItems:flex-start;
`;

const StyledProjectButton = styled(ProjectButton)`
       alignItems:flex-end;
`;

const StyledForm = styled.form`
    padding: 100px;
    margin-bottom: 50px;

`;

const StyledLayout = styled(Layout)`
    backgroundColor:white;
`;

class Projects extends React.Component {

    constructor(props){
      super(props)
        this.state = {
          projects: []
        }
    }


    handleAPI = async(e)=>{
      axios.get(`http://127.0.0.1:8000/projects`)
      .then(res => {
        let convertToLc = e.target.value.toLowerCase()
        const filterData = res.data.filter((e) => {
        const nameToLc = e.projectName.toLowerCase()
          return nameToLc.indexOf(convertToLc) !== -1
        })

        this.setState({ projects : filterData });
      }).catch((err)=>{
         alert(err)
      })
    }

    componentDidMount() {
      axios.get(`http://127.0.0.1:8000/projects`)
        .then(res => {
          const projects = res.data;
          this.setState({ projects });
        }).catch((err)=>{
           alert(err)
        })
    }

    render() {

    return (
      // <PageWrapper loading={false}>
        <StyledForm>   
            {/* <StyledLayout className="layout" style={{backgroundColor:"white"}}>           */}
                <Form>
                   <StyledRow direction="row" style={{justifyContent:'space-between'}}>
                     <Form.Item
                        label="Search Projects:"
                        name="search"                                             
                      >
                          <StyledSearch
                                size='large'
                                placeholder="search"
                                onChange={this.handleAPI}
                          />
                      </Form.Item>
                      <Form.Item>
                            <StyledProjectButton 
                            size="large"
                            btnType="secondary"
                            title="Create Project +"
                            modaltitle="Create a Project"
                            btnstate="Submit"
                            />   
                      </Form.Item>
                      
                   </StyledRow>              
                  <br/>
                </Form>

                {this.state.projects.map(({id,projectName,projectTypeId,projectCreatedby,projectDescription,createdAt})=>(
                <ProjectCard key={id} projectId={id} title ={projectName} type={projectTypeId} projectDescription={projectDescription} createdBy={projectCreatedby} createdAt={createdAt}/>
                ))}


            {/* </StyledLayout> */}
        </StyledForm>
      // </PageWrapper>              
    )
  }
}
export default Projects
