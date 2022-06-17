// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import {Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';
import ProjectCardFooter from './ProjectCardFooter';
import {Link, useNavigate} from 'react-router-dom';

const ProjectCard = (props) => {

  const navigate = useNavigate();

  const ProjectType = {
    1 : "Cement Factory",
    2 : "Highway",
    3 : "Power Plant"
  }
  
  return (
          <Card
          title={props.title+" - "+ ProjectType[props.type]}
          extra={
           <div direction="row">  
              <Link to={`/projects/${props.projectId}/reports/create`}> Create New Report</Link>
              <RouteButton btnType="primary" title="View Reports" 
                  onClick = {()=>navigate(`/projects/${props.projectId}/reports`)}/>
            </div>
          }
          style={{
            width: "100%",
            marginTop: 10
          }}
          >
            <p> {props.projectDescription} </p>
          <ProjectCardFooter createdAt ={props.createdAt} createdBy={props.createdBy}/>
        </Card>
      )
}
export default ProjectCard
