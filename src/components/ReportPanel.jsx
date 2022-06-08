import {Input,Row} from 'antd';
import Item from 'antd/lib/list/Item';
import RouteButton from '../atoms/RouteButton';
import ProjectButton from '../atoms/ProjectButton';
import React from 'react';

function sayHello() {
   alert('You clicked New Report!');
 }

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
                      <ProjectButton 
                        title="Edit Project"
                        modaltitle="Edit a Project"
                       />  
                      <RouteButton title="New Report" onClick={sayHello}/>
                      </Item>
              </Row>     

              <Row direction="row" style={{display: 'flex',justifyContent:'space-between'}}>
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


