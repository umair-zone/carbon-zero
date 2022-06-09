import {Card} from 'antd';
import React from 'react';
import RouteButton from './RouteButton';
import ProjectCardFooter from './ProjectCardFooter';
import {Link, useNavigate} from 'react-router-dom';


const ProjectCard = (props) => {

  const navigate = useNavigate();

  const navigateToReports = (id) => {
    navigate( `/projects/:${id}/reports `, {state:{id} });    
  };

  return (
          <Card
          title={props.title+" - "+props.type}
          extra={
           <div direction="row">  
              {/* `/projects/${props.projectId}/reports` */}
              <Link to={{}}>
              Create New Report</Link>
              <RouteButton title="View Reports" onClick={()=>navigateToReports(props.projectId)}/>
            </div>
          }
          style={{
            width: "100%",
            marginTop: 10
          }}
          >
          <ProjectCardFooter createdAt ={props.createdAt} createdBy={props.createdBy}/>
        </Card>
      )
}
export default ProjectCard
