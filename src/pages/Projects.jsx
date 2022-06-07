import React from 'react'
import {Layout} from 'antd';
import PojectPanel from '../components/ProjectPanel';
import ProjectCard from  '../atoms/ProjectCard'

const Projects = () => {
    return (
        <div className="Layout"
          style={{
            padding: '40px',
            height:  '100vh',
            overflow: 'auto',
          }}
        >
        <Layout className="layout" style={{backgroundColor:"white"}} >           
              <PojectPanel/>
              <ProjectCard title ="First Project" type="Cement" createdBy="Umair" createdAt="2022-06-01"/>
              <ProjectCard title ="Second Project" type="Highway"  createdBy="Prasan" createdAt="2022-06-02" />
              <ProjectCard title ="Third Project" type="Other" createdBy="Ishani" createdAt="2022-06-03"/>
        </Layout>
        </div>    
    )
}
export default Projects
