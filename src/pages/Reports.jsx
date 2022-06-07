import React from 'react'
import {Layout} from 'antd';
import ReportPanel from '../components/ReportPanel';
import ReportCard from  '../atoms/ReportCard'


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
              <ReportCard title ="Report 1"  createdBy="Umair" createdAt="2022-06-01"/>
              <ReportCard title ="Report 2"  createdBy="Umair" createdAt="2022-06-02"/>
              <ReportCard title ="Report 3"  createdBy="Prasan" createdAt="2022-06-03"/>
        </Layout>
        </div>    
    )

}


export default Reports