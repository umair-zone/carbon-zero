import React from 'react'
import {Layout} from 'antd';
import ProjectPanel from '../components/ProjectPanel';
import ProjectCard from  '../atoms/ProjectCard'
import styled from 'styled-components';

const StyledForm = styled.form`
    padding: 40px;
    height:  100vh;
    overflow: auto;
`;

const StyledLayout = styled(Layout)`
    backgroundColor:white;
`;

const details=[
  {id:1,title :"First Project", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,title :"Second Project", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,title :"Third Project",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"}
]

const Projects = () => {
    return (
        <StyledForm>   
            <StyledLayout className="layout" style={{backgroundColor:"white"}}>          
                    <ProjectPanel/>
                    {details.map(({id,title,type,createdBy,createdAt})=>(
                        <ProjectCard key={id} projectId={id} title ={title} type={type} createdBy={createdBy} createdAt={createdAt}/>
                    ))}
            </StyledLayout>
        </StyledForm>              
    )
}
export default Projects
