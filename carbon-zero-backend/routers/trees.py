from fastapi import APIRouter
from services.db import DBService


router = APIRouter()



@router.get("/")
def get_trees():
    data = DBService().get_trees()
    return data

