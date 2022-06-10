import {Form,Row} from 'antd';
import RouteButton from '../atoms/RouteButton';
import ProjectButton from '../atoms/ProjectButton';
import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function sayHello() {
   alert('You clicked New Report!');
 }

const details=[
  {id:1, projectId:1,project:"First Project",title :"Report 1", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,projectId:2,project:"Second Project",title :"Report 2", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,projectId:3,project:"Third Project",title :"Report 3",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"}
]

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;

const ReportPanel = () => {
  
  const {projectId} = useParams();

  return(
        <Form>
               <StyledRow direction="row"
                  style={{display: 'flex',justifyContent:'space-between'}}>
                     {/*item 1  */}
                      <Form.Item style={{paddingTop:"0px"}}>
                            {details.map((ele) => {
                                if(ele.projectId.toString() === projectId.toString()){
                                    return(
                                    <p style={{fontSize:"24px",fontWeight:"bold"}}>  
                                       {ele.project+" - "+ele.type}
                                    </p>
                                    );
                                }else {
                                  return null;
                                }
                              })}                                             
                      </Form.Item>
                     {/*item 2  */}
                      <Form.Item>
                      <ProjectButton 
                        title="Edit Project"
                        modaltitle="Edit a Project"
                        btnstate="Update"
                       />  
                      <RouteButton btnType="primary" title="New Report" onClick={sayHello}/>
                      </Form.Item>
              </StyledRow>     
          </Form>
          );
}
export default ReportPanel


