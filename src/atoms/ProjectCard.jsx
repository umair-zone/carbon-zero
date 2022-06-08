import { Row,Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';


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
          <Row direction="row" style={{display: 'flex'}}>  
          <p style={{fontWeight:"lighter"}}>Created At: {props.createdAt} </p>
          <p style={{fontWeight:"lighter",marginLeft:"50px"}}>Created by : {props.createdBy}</p>
          </Row>
        </Card>
              )
}
export default ProjectCard
