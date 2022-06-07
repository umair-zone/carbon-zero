import {Row,Card,Button } from 'antd';
import React from 'react';

const ReportCard = (props) => {
    return (
          <Card
          title={props.title+" - "+props.createdAt}
          extra={
           <div direction="row">  
               <Button key="1" onClick={{}}
                    style={{
                          backgroundColor:"#dcdcdc",
                          padding:"5px",
                          alignSelf: "flex-end",
                          marginLeft: "20px",
                          width: "100px"
                    }}>
                              View
               </Button> 
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
