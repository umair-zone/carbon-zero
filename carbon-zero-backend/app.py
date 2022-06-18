# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0

from fastapi import FastAPI, Request, Response

from routers import projects
from routers import reports
from routers import trees
from fastapi.middleware.cors import CORSMiddleware
from starlette.types import ASGIApp
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from starlette.types import ASGIApp, Receive, Scope, Send
from starlette.middleware.base import BaseHTTPMiddleware
from services.auth import authenticate
from starlette.middleware import Middleware


app = FastAPI()
class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request , call_next):
        token = request.headers.get("Authorization" , None)
        if token is None:
            return Response("Auth token not provided" , 401)
            
        return await call_next(authenticate(request, token))

origins = [
    "http://localhost:3000",
]


app.add_middleware(AuthMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





       



app.include_router(projects.router , prefix="/projects")
app.include_router(reports.router , prefix="/reports")
app.include_router(trees.router, prefix="/trees")

