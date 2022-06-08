import React from 'react'
import {Layout} from 'antd';
import PojectPanel from '../components/ProjectPanel';
import ProjectCard from  '../atoms/ProjectCard'

const details=[
  {id:1,title :"First Project", type:"Cement", createdBy:"Umair", createdAt:"2022-06-01"},
  {id:2,title :"Second Project", type:"Highway", createdBy:"Prasan",createdAt:"2022-06-02" },
  {id:3,title :"Third Project",type:"Other",createdBy:"Ishani",createdAt:"2022-06-03"}
]


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
              {details.map(({id,title,type,createdBy,createdAt})=>(
                <ProjectCard key={id} title ={title} type={type} createdBy={createdBy} createdAt={createdAt}/>
              ))}
        </Layout>
        </div>    
    )
}
export default Projects
