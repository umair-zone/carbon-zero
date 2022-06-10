import React from 'react'
import {Layout} from 'antd';
import ReportPanel from '../components/ReportPanel';
import ReportCard from  '../atoms/ReportCard'
import styled from 'styled-components';

const StyledForm = styled.form`
    padding: 40px;
    height:  100vh;
    overflow: auto;
`;

const details=[
  {id:1, projectId:1,title :"Report 1", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,projectId:2,title :"Report 2", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,projectId:3,title :"Report 3",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"}
]

const Reports = (props) => {
  return (
      <StyledForm>  
        <Layout className="layout" style={{backgroundColor:"white"}} >   
              <ReportPanel project={props.title} type={props.type}/>
              {details.map(({id,title,type,createdBy,createdAt})=>(
                <ReportCard key={id} projectId={id} type={type} title ={title} createdBy={createdBy} createdAt={createdAt}/>
              ))}   
        </Layout>
        </StyledForm>    
    )

}
export default Reports