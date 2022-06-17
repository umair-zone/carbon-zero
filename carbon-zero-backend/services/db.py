from azure.cosmos import CosmosClient , DatabaseProxy, PartitionKey , ContainerProxy
import uuid
from datetime import datetime,date

get_id = lambda : uuid.uuid4().hex.lower()

URL = "https://carbonzero.documents.azure.com:443/"
KEY = "BRtpDcctxA4G2wzHjrc1qutU2ELSxi9iALhP4Ais3DgtAaVE0GUL2jRz7enpUTPvmyDGoWV1a4wICDdfxWMRAw=="


class DBService:  
    def setup(client:CosmosClient):
        client.delete_database("carbon_zero")
        db = client.create_database_if_not_exists("carbon_zero")
        db.create_container_if_not_exists("Project" , PartitionKey("/projectTypeId"))
        project_type_container = db.create_container_if_not_exists("ProjectType" , PartitionKey("/id"))
        
        db.create_container_if_not_exists("Report" , PartitionKey("/projectId"))
        db.create_container_if_not_exists("ForestEstimation" , PartitionKey("/reportId"))
        tree_container = db.create_container_if_not_exists("Tree" , PartitionKey("/id"))

        #initial setup

        project_type_container.upsert_item({"id": "1" , "name": "Cement Manufacturer"})
        project_type_container.upsert_item({"id": "2" , "name": "Highway"})
        project_type_container.upsert_item({"id": "3", "name": "Power Plant"})

        
        tree_container.create_item({"id": get_id() , "name":"" ,"scientificName":"" ,"absorbtionRate": 2 , "area": 2 })
        tree_container.create_item({"id": get_id() , "name":"" ,"scientificName":"" ,"absorbtionRate": 4 , "area": 4 })
        tree_container.create_item({"id": get_id() , "name":"" ,"scientificName":"" ,"absorbtionRate": 5 , "area": 1 })


    def __init__(self ):
        self.client = CosmosClient(URL, KEY)
        self.db = self.client.get_database_client("carbon_zero")
        self.project_container = self.db.get_container_client("Project")
        self.project_type_container = self.db.get_container_client("ProjectType")
        self.report_container = self.db.get_container_client("Report")
        self.tree_container = self.db.get_container_client("Tree")

    
    
    def create_project(self, projectName:str, projectTypeId:str ,projectLocation:str,projectCreatedby:str, projectDescription:str=None ):
        return self.project_container.create_item(
            { 
            "id": get_id() ,
            "projectName": projectName , 
            "projectTypeId": projectTypeId,
            "projectDescription": projectDescription,
            "projectCreatedby":projectCreatedby,
            "projectLocation":projectLocation,
            "createdAt":""#datetime.now().strftime("%d/%m/%Y %H:%M:%S")
            }
        )

    def delete_project(self , projectId:str , particationKey:str) -> None:
        self.project_container.delete_item(projectId , particationKey )

    def update_project(self, projectId:str , projectName:str, projectTypeId:int ,projectDescription:str,projectLocation:str,projectCreatedby:str ):
                
        self.project_container.upsert_item({
            "id": projectId ,
            "projectName": projectName , 
            "projectTypeId": projectTypeId,
            "projectDescription": projectDescription,
            "projectLocation":projectLocation,
            "projectCreatedby":projectCreatedby,
            "createdAt":""#datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        })


    def add_trees(self):
        pass


    def get_trees(self):
        data =  self.tree_container.query_items(query= "SELECT t.id , t.absorbtionRate , t.area FROM Tree t" , enable_cross_partition_query=True)
        return [ d for d in data]
    
    def get_projects(self):
        data =  self.project_container.query_items(query= "SELECT p.id , p.projectName , p.projectTypeId,p.projectDescription,p.projectLocation,p.projectCreatedby,p.createdAt FROM Projects p" , enable_cross_partition_query=True)
        return [ d for d in data]


    def create_report(self , name , params , ):
        return self.report_container.create_item({"id": get_id(),"name": name,"params": params})
    

