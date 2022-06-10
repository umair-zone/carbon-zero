import React, { useState } from 'react';
import {Layout,Form,Input,Row} from 'antd';
import ProjectCard from  '../atoms/ProjectCard'
import ProjectButton from '../atoms/ProjectButton';
import styled from 'styled-components';

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
    padding: 40px;
    height:  100vh;
    overflow: auto;
`;

const StyledLayout = styled(Layout)`
    backgroundColor:white;
`;


const onSearch = (value) => console.log(value);


const details=[
  {id:1,title :"First Project", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,title :"Second Project", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,title :"Third Project",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"}
]

const Projects = () => {

    const [dataSource, setDataSource] = useState(details);
    const [value, setValue] = useState('');

    return (
        <StyledForm>   
            <StyledLayout className="layout" style={{backgroundColor:"white"}}>          
                <Form>
                   <StyledRow direction="row" style={{justifyContent:'space-between'}}>
                     <Form.Item
                        label="Search Projects:"
                        name="search"                                              
                      >
                          <StyledSearch
                                placeholder="search"
                                onSearch={onSearch}
                                value={value}
                                onChange={e => {
                                  const currValue = e.target.value;
                                  setValue(currValue);
                                  const filteredData = details.filter(entry =>
                                    entry.title.includes(currValue)
                                  );
                                  setDataSource(filteredData);
                                }}
                          />
                      </Form.Item>
                      <Form.Item>
                            <StyledProjectButton 
                            btnType="primary"
                            title="Create Project +"
                            modaltitle="Create a Project"
                            btnstate="Submit"
                            />   
                      </Form.Item>
                   </StyledRow>              
                  <br/>
                </Form>

                {dataSource.map(({id,title,type,createdBy,createdAt})=>(
                <ProjectCard key={id} projectId={id} title ={title} type={type} createdBy={createdBy} createdAt={createdAt}/>
                ))}

            </StyledLayout>
        </StyledForm>              
    )
}
export default Projects
