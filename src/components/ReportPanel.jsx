import { Button,Input,Row} from 'antd';
import Item from 'antd/lib/list/Item';
import React from 'react';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const ReportPanel = () => (
            <>
              <Row direction="row"
                  style={{display: 'flex',
                     justifyContent:'space-between'}}>
                      <Item style={{paddingTop:"20px"}}>
                        <p style={{fontSize:"24px",fontWeight:"bold",width:"180px"}}>Project Name - </p>  
                        <p style={{fontSize:"20px",color:"GrayText",width:"200px",marginLeft:"0px"}}>Project Type</p>  
                      </Item>
                      <Item>
                      <Button key="1" style={{backgroundColor:"#dcdcdc",marginRight:"10px"}} onClick={{}}>Edit Project</Button>
                      <Button key="2" style={{backgroundColor:"#dcdcdc"}} onClick={{}}>New Report</Button> 
                      </Item>
              </Row>     

              <Row direction="row"
                  style={{display: 'flex',
                     justifyContent:'space-between'}}>
                  <Item>
                  <Search
                            placeholder="search"
                            onSearch={onSearch}
                            style={{
                                      alignItems:"flex-start"
                               }}
                            />         
                   </Item>             
              </Row>                          

              <br/>
              </>
          );

export default ReportPanel


