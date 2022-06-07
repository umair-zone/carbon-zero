import { Card,Button } from 'antd';
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
          <p>Created At: 2022-01-01   Created by : John</p>
        </Card>
              )
}
export default ReportCard
