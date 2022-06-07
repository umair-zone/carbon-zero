import { Row,Card,Button } from 'antd';
import React from 'react';

const ProjectCard = () => {
    return (
          <Card
          title="Project Name - Project Type"
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
          <p style={{fontWeight:"lighter"}}>Created At: 2022-01-01 </p>
          <p style={{fontWeight:"lighter",marginLeft:"50px"}}>Created by : John</p>
          </Row>
        </Card>
              )
}
export default ProjectCard
