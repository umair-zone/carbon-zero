from fastapi import APIRouter,Query,HTTPException

import json
from datetime import datetime,date
from pydantic import BaseModel

router = APIRouter()

class Project(BaseModel):
    id: int
    title : str
    type: str
    createdBy: str
    createdAt: date             

with open('projects.json','r') as f:
    projects = json.load(f)           

with open('reports.json','r') as f:
    reports = json.load(f)           



@router.get("/")
def list_projects():        
    return projects

@router.get("/{projectId}")
def list_project(projectId:int):
    project = [p for p in projects if p['id'] == projectId ]          
    return project[0] if len(project) > 0 else {}

@router.get("/{projectId}/reports")
def list_project(projectId:int):
    report = [p for p in reports if p['id'] == projectId ]          
    return report[0]  if len(report) > 0 else {}

@router.post("/createProject")
def create_projects(project:Project):
    projectId = max([p['id'] for p in projects]) + 1
    new_project ={
        "id":projectId,
        "title" :project.title,
        "type":project.type, 
        "createdBy":project.createdBy,
        "createdAt":datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    }
    projects.append(new_project)
    with open('projects.json','w') as f:
        json.dump(projects,f)
    return new_project

@router.put("/changeProject")
def create_projects(project:Project):
    new_project ={
        "id":project.id,
        "title" :project.title,
        "type":project.type, 
        "createdBy":project.createdBy,
        "createdAt":datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
    }
    projects.append(new_project)
    
    project_list = [p for p in projects if p['id']==project.id]
    if len(project_list) >0:
          projects.remove(project_list[0])
          projects.append(new_project)
          with open('projects.json','w') as f:
                      json.dump(projects,f)       
    else:
        return HTTPException(status_code=404,detail="Project with id{project.id} does not exit!")       
     
    with open('projects.json','w') as f:
        json.dump(projects,f)
    return new_project

@router.delete("/{projectId}")
def create_projects(projectId:int):
    project = [p for p in projects if p['id']==projectId]
    if len(project) >0:
          projects.remove(project[0])
          with open('projects.json','w') as f:
                      json.dump(projects,f)       
    else:
        return HTTPException(status_code=404,detail="Project with id{project.id} does not exit!")       
    return "Success!"
