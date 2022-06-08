import React from 'react'
import {Layout} from 'antd';
import ReportPanel from '../components/ReportPanel';
import ReportCard from  '../atoms/ReportCard'

const details=[
  {id:1,title :"Report 1", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,title :"Report 2", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,title :"Report 3",type:"Other",createdBy:"Ishani",createdAt:"2022-06-03"}
]


const Reports = () => {

    return (
        <div className="Layout"
          style={{
            padding: '40px',
            height:  '100vh',
            overflow: 'auto',
          }}
        >
        <Layout className="layout" style={{backgroundColor:"white"}} >           
              <ReportPanel/>
              {details.map(({id,title,type,createdBy,createdAt})=>(
                <ReportCard key={id} title ={title} createdBy={createdBy} createdAt={createdAt}/>
              ))}   
        </Layout>
        </div>    
    )

}

export default Reports