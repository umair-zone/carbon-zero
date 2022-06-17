import {Form,Row} from 'antd';
import RouteButton from '../atoms/RouteButton';
import UpdateButton from '../atoms/UpdateButton';
import React from 'react';
import styled from 'styled-components';

function sayHello() {
   alert('You clicked New Report!');
 }

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;

const ReportPanel = (props) => {
  
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
                      <UpdateButton 
                        title="Edit Project"
                        modaltitle="Edit a Project"
                        btnstate="Update"
                        projectId={props.projectId}
                       />  
                      <RouteButton btnType="primary" title="New Report" onClick={sayHello}/>
                      </Form.Item>
              </StyledRow>     
          </Form>
          );
}
export default ReportPanel


