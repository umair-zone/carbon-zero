import {Form,Input,Row} from 'antd';
import Item from 'antd/lib/list/Item';
import RouteButton from '../atoms/RouteButton';
import ProjectButton from '../atoms/ProjectButton';
import React from 'react';
import styled from 'styled-components';

function sayHello() {
   alert('You clicked New Report!');
 }

const { Search } = Input;

const onSearch = (value) => console.log(value);

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;


const ReportPanel = (props) => {
      return(
        <Form>
              <StyledRow direction="row"
                  style={{display: 'flex',justifyContent:'space-between'}}>
                     {/*item 1  */}
                      <Form.Item style={{paddingTop:"0px"}}>
                        <p style={{fontSize:"24px",fontWeight:"bold"}}>{props.project+" - "+props.type}</p>                   
                      </Form.Item>
                     {/*item 2  */}
                      <Form.Item>
                      <ProjectButton 
                        title="Edit Project"
                        modaltitle="Edit a Project"
                       />  
                      <RouteButton title="New Report" onClick={sayHello}/>
                      </Form.Item>
              </StyledRow>     


              <StyledRow direction="row" style={{display: 'flex',justifyContent:'space-between'}}>
                     <Item>
                           <Search
                            placeholder="search"
                            onSearch={onSearch}
                            style={{alignItems:"flex-start"}}
                            />         
                     </Item>             
              </StyledRow>                          
              <br/>
          </Form>
          );
}
export default ReportPanel


