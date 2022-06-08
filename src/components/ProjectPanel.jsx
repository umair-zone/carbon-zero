import {Form,Input,Row} from 'antd';
import React from 'react';
import ProjectButton from '../atoms/ProjectButton';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const PojectPanel = () => {
          return(
            <>
            <Form>
              <Row direction="row"
                  style={{display: 'flex',justifyContent:'space-between'}}>
                     <Form.Item
                        label="Search Projects:"
                        name="search"                                              
                      >
                      <Search
                            placeholder="search"
                            onSearch={onSearch}
                            style={{
                                    alignItems:"flex-start"
                               }}
                      />
                      </Form.Item>
                      <Form.Item>
                            <ProjectButton 
                            title="Create Project +"
                            modaltitle="Create a Project"
                            />   
                      </Form.Item>
                   </Row>              
                  <br/>
              </Form>
          </>
  )
};


export default PojectPanel


