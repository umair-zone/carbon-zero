from fastapi import APIRouter,Query,HTTPException
from pydantic import BaseModel
from services.db import DBService 
#import random

router = APIRouter()

dbs = DBService()

class Project(BaseModel):
        projectName: str
        projectTypeId: int
        projectDescription: str
        projectCreatedby:str
        projectLocation:str        

class UpdateProject(BaseModel):
        id: str
        projectName: str
        projectTypeId: int
        projectDescription: str
        projectLocation:str 
        projectCreatedby:str
         

       
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
        projectCreatedby="",#"Logged_user_"+str(random.randint(1,4)),
        projectLocation=project.projectLocation  
    )
    return "Success!"
     
@router.delete("/{projectId}")
def create_projects(projectId:str):
    projects = DBService().get_projects() 
    project = [p for p in projects if p['id']==projectId] 
    projects = project[0] if len(project) > 0 else {}     
    if len(project) >0:
         DBService().delete_project(projectId=str(projects['id']),particationKey=projects['projectTypeId'])     
    else:
        return HTTPException(status_code=404,detail="Project with id{project.id} does not exit!")       
    return "Success!"


@router.put("/changeProject/{projectId}")
def update_projects(projectId:str,updateproject:UpdateProject):                        
    projects = DBService().get_projects() 
    project = [p for p in projects if p['id']==projectId] 
    if (len(project) > 0) :
      DBService().update_project(
      projectId=updateproject.id,
      projectName=updateproject.projectName,
      projectTypeId=updateproject.projectTypeId,
      projectDescription=updateproject.projectDescription,
      projectLocation=updateproject.projectLocation,
      projectCreatedby=updateproject.projectCreatedby,#"Logged_user_"+str(random.randint(1,4)),  
    )
      return "Success!"              
    else:
        print("NOT found")              
    
# @router.get("/{projectId}/reports")
# def list_project(projectId:int):
#     report = [p for p in reports if p['id'] == projectId ]          
#     return report[0]  if len(report) > 0 else {}





