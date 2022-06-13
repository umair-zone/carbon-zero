from fastapi import FastAPI
from src import test
from routers import projects

app = FastAPI()

app.include_router(projects.router , prefix="/projects")

@app.get("/test")
def read_root():
    return {"Hello": test.message()}