// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import React /*, { useState } */ from 'react';
import {Form,Input,Row} from 'antd';
import ProjectCard from  '../atoms/ProjectCard'
import ProjectButton from '../atoms/ProjectButton';
import styled from 'styled-components';
import {HOST} from "../services/api/config";

import axios from 'axios';






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



class Projects extends React.Component {

    constructor(props){
      super(props)
        this.state = {
          projects: []
        }
    }


    handleAPI = async(e)=>{
      axios.get(`${HOST}/projects`)
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
      axios.get(`${HOST}/projects`)
        .then(res => {
          const projects = res.data;
          this.setState({ projects });
        }).catch((err)=>{
           alert(err)
        })
    }

    render() {

    return (
        <StyledForm>   
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
        </StyledForm>
         
    )
  }
}
export default Projects
