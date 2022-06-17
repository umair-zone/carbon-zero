# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0


from fastapi import APIRouter,Query,HTTPException
from pydantic import BaseModel
from services.db import DBService 
import random

router = APIRouter()

dbs = DBService()

class Project(BaseModel):
        projectName: str
        projectTypeId: int
        projectDescription: str
        projectCreatedby:str
        projectLocation:str        
       
@router.get("/")
def list_projects():        
    projects = DBService().get_projects()
    return projects

@router.get("/{projectId}")
def list_project(projectId:str):
    projects = DBService().get_projects()   
    project = [p for p in projects if p['id']==projectId]     
    return project[0] if len(project) > 0 else {}


@router.post("/createProject")
def create_projects(project:Project):             
   
    DBService().create_project(
        projectName=project.projectName,
        projectTypeId=project.projectTypeId,
        projectDescription=project.projectDescription,
        projectCreatedby="Logged_user_"+str(random.randint(1,4)),
        projectLocation=project.projectLocation  
    )
    return "Success!"
     
@router.delete("/{projectId}")
def create_projects(projectId:str):
    projects = DBService().get_projects() 
    project = [p for p in projects if p['id']==projectId] 
    projects = project[0] if len(project) > 0 else {}
    print(projects)
    print(str(projects['id'])+" "+str(projects['projectTypeId']))     
    if len(project) >0:
         DBService().delete_project(projectId=str(projects['id']),particationKey=projects['projectTypeId'])     
    else:
        return HTTPException(status_code=404,detail="Project with id{project.id} does not exit!")       
    return "Success!"



@router.get("/{projectId}/reports")
def list_project(projectId:str):
    data = dbs.get_reports(projectId)       
    return data




# @router.put("/changeProject")
# def create_projects(project:Project):
#     new_project ={
#         "id":project.id,
#         "title" :project.title,
#         "type":project.type, 
#         "createdBy":project.createdBy,
#         "createdAt":datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
#     }
#     projects.append(new_project)
    
#     project_list = [p for p in projects if p['id']==project.id]
#     if len(project_list) >0:
#           projects.remove(project_list[0])
#           projects.append(new_project)
#           with open('projects.json','w') as f:
#                       json.dump(projects,f)       
#     else:
#         return HTTPException(status_code=404,detail="Project with id{project.id} does not exit!")       
     
#     with open('projects.json','w') as f:
#         json.dump(projects,f)
#     return new_project


