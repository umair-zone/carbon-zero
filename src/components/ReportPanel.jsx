import {Form,Row} from 'antd';
import RouteButton from '../atoms/RouteButton';
import ProjectButton from '../atoms/ProjectButton';
import React from 'react';
import styled from 'styled-components';
import {navigate} from 'react-router'
import {useParams , useNavigate} from 'react-router-dom';



const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;

const ReportPanel = (props) => {
  
  const {projectId} = useParams();
  const navigate = useNavigate();

  return(
        <Form>
               <StyledRow direction="row"
                  style={{display: 'flex',justifyContent:'space-between'}}>
                     {/*item 1  */}
                      <Form.Item style={{paddingTop:"0px"}}>
                                    <p style={{fontSize:"24px",fontWeight:"bold"}}>  
                                       {props.project}
                                    </p>
                      </Form.Item>
                     {/*item 2  */}
                      <Form.Item>
                      <ProjectButton 
                        title="Edit Project"
                        modaltitle="Edit a Project"
                        btnstate="Update"
                       />  
                      <RouteButton btnType="primary" title="New Report" onClick={() => navigate(`/projects/${projectId}/reports/create`)}/>
                      </Form.Item>
              </StyledRow>     
          </Form>
          );
}
export default ReportPanel


