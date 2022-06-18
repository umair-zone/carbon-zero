// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import {Form,Row} from 'antd';
import RouteButton from '../atoms/RouteButton';
import UpdateButton from '../atoms/UpdateButton';
import React from 'react';
import styled from 'styled-components';

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
                      <RouteButton btnType="primary" title="New Report" onClick={() => navigate(`/projects/${projectId}/reports/create`)}/>
                      </Form.Item>
              </StyledRow>     
          </Form>
          );
}
export default ReportPanel


