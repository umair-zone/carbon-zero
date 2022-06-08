import React from 'react';
import {Row} from 'antd';

const ProjectCardFooter = (props) => {
    return (
          <Row direction="row" style={{display: 'flex'}}>  
          <p style={{fontWeight:"lighter"}}>Created At: {props.createdAt} </p>
          <p style={{fontWeight:"lighter",marginLeft:"50px"}}>Created by : {props.createdBy}</p>
          </Row>
    )
}
export default ProjectCardFooter