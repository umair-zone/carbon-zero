import {Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';
import ProjectCardFooter from './ProjectCardFooter';


function sayHello() {
  alert('You clicked View->Report!');
}

const ReportCard = (props) => {
    return (
          <Card
          title={props.title}
          extra={
           <div direction="row">  
               <RouteButton title="View" onClick={sayHello}/>
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
