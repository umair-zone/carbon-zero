// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0
import {Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';
import ProjectCardFooter from './ProjectCardFooter';
import { useNavigate } from 'react-router-dom';


function sayHello() {
  alert('You clicked View->Report!');
}

const ReportCard = (props) => {
  const naviage = useNavigate()



  return (
          <Card
          title={props.title}
          extra={
           <div direction="row">  
               <RouteButton title="View" onClick={() => naviage(`/reports/${props.id}`) }/>
            </div>
          }
          style={{
            width: "100%",
            marginTop:"10px"
          }}
          >
          <ProjectCardFooter createdAt ={props.createdAt} createdBy={props.createdBy}/>
        </Card>
              )
}
export default ReportCard
