import {Card} from 'antd';
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
              <a href="./reports">Create New Report</a>
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
