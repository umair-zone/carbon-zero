import React, { useState } from 'react';
import Item from 'antd/lib/list/Item';
import {Layout,Row,Input} from 'antd';
import ReportPanel from '../components/ReportPanel';
import ReportCard from  '../atoms/ReportCard'
import styled from 'styled-components';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const StyledForm = styled.form`
    padding: 40px;
    height:  100vh;
    overflow: auto;
`;

const StyledSearch = styled(Search)`
       alignItems:flex-start;
`;

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;


const details=[
  {id:1, projectId:1,title :"Report 1", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,projectId:2,title :"Report 2", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,projectId:3,title :"Report 3",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"}
]

const Reports = (props) => {

  const [dataSource, setDataSource] = useState(details);
  const [value, setValue] = useState('');


  return (
      <StyledForm>  
        <Layout className="layout" style={{backgroundColor:"white"}} >   
              <ReportPanel project={props.title} type={props.type}/>

              <StyledRow direction="row" style={{display: 'flex',justifyContent:'space-between'}}>
              <Item>
              <StyledSearch
                   placeholder="search"
                   onSearch={onSearch}
                   value={value}
                   onChange={e => {
                   const currValue = e.target.value;
                   setValue(currValue);
                   const filteredData = details.filter(entry =>
                     entry.title.includes(currValue)
                   );
                   setDataSource(filteredData);
                  }}
              />
               </Item>             
              </StyledRow>                          
              <br/>

              {dataSource.map(({id,title,type,createdBy,createdAt})=>(
                <ReportCard key={id} projectId={id} type={type} title ={title} createdBy={createdBy} createdAt={createdAt}/>
              ))}   
        </Layout>
        </StyledForm>    
    )

}
export default Reports