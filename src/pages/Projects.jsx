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
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
        </Layout>
        </div>    
    )
}
export default Projects
