import React from 'react';
import {Row} from 'antd';

const ProjectCardFooter = (props) => {
    return (
          <Row direction="row" style={{display: 'flex'}}>  
          <p>Created At: {props.createdAt} </p>
          <p style={{marginLeft:"50px"}}>Created by : {props.createdBy}</p>
          </Row>
    )
}
export default ProjectCardFooter