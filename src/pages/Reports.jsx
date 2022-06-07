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
              <ReportCard/>
        </Layout>
        </div>    
    )

}


export default Reports