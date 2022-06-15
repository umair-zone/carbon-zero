from fastapi import FastAPI
from src import test
from routers import projects
from routers import reports
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(projects.router , prefix="/projects")
app.include_router(reports.router , prefix="/reports")

@app.get("/test")
def read_root():
    return {"Hello": test.message()}