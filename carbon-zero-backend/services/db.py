from azure.cosmos import CosmosClient , DatabaseProxy, PartitionKey , ContainerProxy
import uuid
import csv


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
        emission_container = db.create_container_if_not_exists("Emission" , PartitionKey("/id"))

        #initial setup

        project_type_container.upsert_item({"id": "1" , "name": "Cement Manufacturer"})
        project_type_container.upsert_item({"id": "2" , "name": "Highway"})
        project_type_container.upsert_item({"id": "3", "name": "Power Plant"})

        
        tree_container.create_item({"id": get_id() , "name":"" ,"scientificName":"" ,"absorbtionRate": 2 , "area": 2 })
        tree_container.create_item({"id": get_id() , "name":"" ,"scientificName":"" ,"absorbtionRate": 4 , "area": 4 })
        tree_container.create_item({"id": get_id() , "name":"" ,"scientificName":"" ,"absorbtionRate": 5 , "area": 1 })

         
        #emission data
        emission_data = [{"cause": "Cement Manufacturing" , "code" : "CEMENT", "emission": 0.9 , "unit":"kg"},
        {"cause": "Energy from coal" , "code" : "ENERGYCOAL", "emission": 1.01 , "unit":"kwh"},
        {"cause": "Power plant coal combunsion - Anthracite coal" , "code" : "COALANTH", "emission": 3.3 , "unit":"kg"},
        {"cause": "Power plant coal combunsion - Bituminous coal" , "code" : "COALBITU", "emission": 2.42 , "unit":"kg"}
        ]

        for d in emission_data:
            emission_container.create_item({"id": get_id()}|d )

    

    def __init__(self ):
        self.client = CosmosClient(URL, KEY)
        self.db = self.client.get_database_client("carbon_zero")
        self.project_container = self.db.get_container_client("Project")
        self.project_type_container = self.db.get_container_client("ProjectType")
        self.report_container = self.db.get_container_client("Report")
        self.tree_container = self.db.get_container_client("Tree")
        self.emission_container = self.db.get_container_client("Emission")
    
    
    def create_project(self, projectName:str, projectTypeId:str , projectDescription:str=None ):
        return self.project_container.create_item(
            { 
            "id": get_id() ,
            "projectName": projectName , 
            "projectTypeId": projectTypeId,
            "projectDescription": projectDescription
            }
        )

    def delete_project(self , projectId:str , particationKey:str) -> None:
        self.project_container.delete_item(projectId , particationKey )

    def update_project(self, id , projectName:str, projectTypeId:str , projectDescription:str):
        self.project_container.replace_item( {
            "id":id
            , "projectName": projectName 
            , "projectTypeId": projectTypeId
            , "projectDescription": projectDescription}
        )


    def get_project(self, projectId:str):
        data =  self.project_container.query_items(
            query= f"SELECT *  FROM Project p WHERE p.id='{projectId}'", 
            enable_cross_partition_query=True)
        return [ d for d in data]

    def get_project_type(self, projectTypeId:str):
        pass


    def add_trees(self):
        pass


    def get_trees(self):
        data =  self.tree_container.query_items(query= "SELECT t.id , t.absorbtionRate , t.area FROM Tree t" , enable_cross_partition_query=True)
        return [ d for d in data]


    def create_report(self , name , projectId ,params , ):
        return self.report_container.create_item({"id": get_id(),
        "name": name, 'projectId': projectId,"params": params})
    

    def get_report(self, reportId:str):
        data = self.report_container.query_items(
            query= f"SELECT r.id , r.projectId, r.params  FROM Report r WHERE r.id='{reportId}' " , 
            enable_cross_partition_query=True
        )
        try:
            return [d for d in data][0]
        except IndexError:
            raise InvalidEmissionCodeError

    def read_emissions(self):
        data = self.emission_container.query_items(query= "SELECT e.code , e.emission  FROM Emission e" , enable_cross_partition_query=True)
        return [d for d in data]

    def get_emission(self, code:str):
        data = self.emission_container.query_items(
            query= f"SELECT e.code , e.emission  FROM Emission e WHERE e.code='{code}' " , 
            enable_cross_partition_query=True
        )
        try:
            return [d for d in data][0]
        except IndexError:
            raise InvalidEmissionCodeError


class InvalidEmissionCodeError(Exception):
    pass