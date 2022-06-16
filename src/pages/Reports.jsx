import React from 'react';
import Item from 'antd/lib/list/Item';
import {Layout,Row,Input} from 'antd';
import ReportPanel from '../components/ReportPanel';
import ReportCard from  '../atoms/ReportCard';
import styled from 'styled-components';
import axios from 'axios';
//import { withRouter } from "react-router-dom";
import {useParams} from 'react-router-dom';

const { Search } = Input;

const StyledRow = styled(Row)`
    display: flex;
    justifyContent:space-between;
    padding: 5px;
`;

const StyledSearch = styled(Search)`
       alignItems:flex-start;
`;

const StyledForm = styled.form`
    padding: 100px;
`;


class Reports extends React.Component {

  constructor(props){
    super(props)
      this.state = {
        projects:[],
        id:"",
        projectName:"",
        projectTypeId:"",
        projectType:"",
        projectDescription:"",
        projectLocation:"",
        projectCreatedby:"",
        createdAt:" ",
        reports: [
          {id:1, projectId:1,title :"Report 1", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
          {id:2,projectId:2,title :"Report 2", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
          {id:3,projectId:3,title :"Report 3",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"},
          {id:3,projectId:3,title :"ABC",type:"Coal",createdBy:"Ishani",createdAt:"2022-06-03"}
        ]
      }
  }
  
  // handleAPI = async(e)=>{
  //   let convertToLc = e.target.value.toLowerCase()
  //   const filterData = this.state.reports.filter((e) => {
  //    const nameToLc = e.projectName.toLowerCase()
  //      return nameToLc.indexOf(convertToLc) !== -1
  //    })
  //   this.setState({ reports : filterData });
  // }


  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/projects/${this.props.param.projectId}`)
      .then(res => {
        const projects = res.data;
        this.setState({ 
          projects:[],
          id : projects["id"],
          projectName: projects["projectName"],
          projectTypeId:projects["projectTypeId"],
          projectDescription:projects["projectDescription"],
          projectLocation:projects["projectLocation"],
          projectCreatedby:projects["projectCreatedby"],
          createdAt:projects["createdAt"],
        });
        console.log(projects["projectName"])
      }).catch((err)=>{
         alert(err)
      })
  }
  
  render() {
   //alert(JSON.stringify(this.props.param.projectId))

  return (    
      <StyledForm>  
        {/* <Layout className="layout" style={{backgroundColor:"white"}} >    */}

              <ReportPanel project={this.state.projectName}/>

              <StyledRow direction="row" style={{display: 'flex',justifyContent:'space-between'}}>
              <Item>

                <StyledSearch
                  placeholder="search"
                  onChange={(e)=>this.handleAPI(e)}
                />
               </Item>             
              </StyledRow>                          
              <br/>

              {this.state.reports.map(({id,title,type,createdBy,createdAt})=>(
                <ReportCard key={id} projectId={id} type={type} title ={title} createdBy={createdBy} createdAt={createdAt}/>
              ))}   
              
        {/* </Layout> */}
        </StyledForm>    
    )
  }
}

function Getparam(props){
   const param = useParams();
   return <Reports {...props}  param={param}/>;
}


export default Getparam;

