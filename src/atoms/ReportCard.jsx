import {Row,Card,Button } from 'antd';
import React from 'react';

const ReportCard = () => {
    return (
          <Card
          title="Report 1 - 2022-06-07"
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
          <p style={{fontWeight:"lighter"}}>Created At: 2022-01-01 </p>
          <p style={{fontWeight:"lighter",marginLeft:"50px"}}>Created by : John</p>
          </Row>

        </Card>
              )
}
export default ReportCard
