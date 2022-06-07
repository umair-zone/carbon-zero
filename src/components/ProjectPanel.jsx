import { Button,Input,Row} from 'antd';
import Item from 'antd/lib/list/Item';
import React from 'react';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const PojectPanel = () => (
            <>
              <Row direction="row"
                  style={{display: 'flex',
                     justifyContent:'space-between'}}>
                     <Item>
                        <p style={{fontWeight:"bold",width:"200px"}}>Search Projects:</p>  
                       <Search
                            placeholder="search"
                            onSearch={onSearch}
                            style={{
                                      alignItems:"flex-start"
                               }}
                            />
                      </Item>
                      <Item>
                      <Button key="1" 
                        onClick={{}}
                        style={{
                          backgroundColor:"#dcdcdc",
                          padding:"1px",
                          width:"150px",
                          alignSelf: "flex-end"
                         }}>Create Project +</Button> 
                        </Item>
              </Row>              
              <br/>
              </>
          );

export default PojectPanel


