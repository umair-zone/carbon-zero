import { Row,Card,Button } from 'antd';
import React from 'react';

const ProjectCard = (props) => {
    return (
          <Card
          title={props.title+" - "+props.type}
          extra={
           <div direction="row">  
            <a href="./projects">Create New Report</a>
               <Button key="1" onClick={{}}
                    style={{
                          backgroundColor:"#dcdcdc",
                          padding:"5px",
                          alignSelf: "flex-end",
                          marginLeft: "20px"
                    }}>
                              View Reports
               </Button> 
            </div>
          }
          style={{
            width: "100%",
            marginTop: 10
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
export default ProjectCard
