import {Card} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import RouteButton from './RouteButton';
import ProjectCardFooter from './ProjectCardFooter';


function sayHello() {
  alert('You clicked View Report!');
}

const ProjectCard = (props) => {
    return (
          <Card
          title={props.title+" - "+props.type}
          extra={
           <div direction="row">  
              <Link to={`/projects/${props.projectId}/reports`}  state={props}>
              Create New Report</Link>
              <RouteButton title="View Reports" onClick={sayHello}/>
            </div>
          }
          style={{
            width: "100%",
            marginTop: 10
          }}
          >
          <ProjectCardFooter createdAt ={props.createdAt} createdBy={props.createdBy}/>
        </Card>
              )
}
export default ProjectCard
