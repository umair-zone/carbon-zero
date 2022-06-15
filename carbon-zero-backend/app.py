from fastapi import FastAPI
from src import test
from routers import projects
from routers import reports



app = FastAPI()


app.include_router(projects.router , prefix="/projects")
app.include_router(reports.router , prefix="/reports")

@app.get("/test")
def read_root():
    return {"Hello": test.message()}