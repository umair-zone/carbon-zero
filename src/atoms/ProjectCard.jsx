import {Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';
import ProjectCardFooter from './ProjectCardFooter';
import {Link, useNavigate} from 'react-router-dom';

const ProjectCard = (props) => {

  const navigate = useNavigate();

  return (
          <Card
          title={props.title+" - "+props.type}
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
