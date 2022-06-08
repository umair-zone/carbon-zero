import {Row,Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';

function sayHello() {
  alert('You clicked View->Report!');
}

const ReportCard = (props) => {
    return (
          <Card
          title={props.title+" - "+props.createdAt}
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
          <Row direction="row"
          style={{display: 'flex'}}>  
          <p style={{fontWeight:"lighter"}}>Created At: {props.createdAt} </p>
          <p style={{fontWeight:"lighter",marginLeft:"50px"}}>Created by : {props.createdBy}</p>
          </Row>
        </Card>
              )
}
export default ReportCard
