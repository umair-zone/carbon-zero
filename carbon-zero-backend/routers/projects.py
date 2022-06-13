from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_projects():
    return []


@router.post("/")
def create_projects():
    return []


@router.get("/{project_id}")
def create_projects(project_id:int):
    return [project_id]

# POST projects/ 
# GET projects/
# DELETE projects/1/
# PATCH 
# PUT

# POST projects/1/reports/
# GET projects/1/reports