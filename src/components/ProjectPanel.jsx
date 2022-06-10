import {Form,Input,Row} from 'antd';
import React from 'react';
import ProjectButton from '../atoms/ProjectButton';
import styled from 'styled-components';

const { Search } = Input;

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;

const StyledSearch = styled(Search)`
       alignItems:flex-start;
`;

const StyledProjectButton = styled(ProjectButton)`
       alignItems:flex-end;
`;

const onSearch = (value) => console.log(value);

const ProjectPanel = () => {
          return(
            <>
            <Form>
              <StyledRow direction="row" style={{justifyContent:'space-between'}}>
                     <Form.Item
                        label="Search Projects:"
                        name="search"                                              
                      >
                          <StyledSearch
                                placeholder="search"
                                onSearch={onSearch}
                                // style={{alignItems:"flex-start"}}
                          />
                      </Form.Item>
                      <Form.Item>
                            <StyledProjectButton 
                            title="Create Project +"
                            modaltitle="Create a Project"
                            btnstate="Submit"
                            />   
                      </Form.Item>
                   </StyledRow>              
                  <br/>
              </Form>
          </>
  )
};

export default ProjectPanel


