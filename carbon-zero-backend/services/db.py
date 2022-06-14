from azure.cosmos import CosmosClient , DatabaseProxy, PartitionKey , ContainerProxy
import uuid

get_id = lambda : uuid.uuid4().hex.lower()


URL = ""
KEY = ""

client = CosmosClient(URL, KEY)


def create_db(name:str):
    return client.create_database_if_not_exists(name)

def create_container(db:DatabaseProxy , name:str,partition_key_path:str=None):
    return db.create_container_if_not_exists(name , PartitionKey(partition_key_path))

def add_new_project(container:ContainerProxy, project_name:str , project_type_id:str):
    container.upsert_item({
        "projectTypeId": project_type_id,
        "projectName": project_name
    })



class DBService():

    def __init__(self , client:CosmosClient , dbName:str=None ):
        client.delete_database("carbon_zero")
        self.db = create_db("carbon_zero")
        self.project_container = create_container(self.db, "Project", "/projectTypeId")
        self.project_type_container = create_container(self.db, "ProjectType" , "/projectTypeId")
        
        #initial setup

        self.project_type_container.upsert_item({"id": "1" , "name": "Cement Manufacturer"})
        self.project_type_container.upsert_item({"id": "2" , "name": "Highway"})
        self.project_type_container.upsert_item({"id": "3", "name": "Power Plant"})
    
    
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

    def update_project(self, id , 
    projectName:str, projectTypeId:str , projectDescription:str):
        self.project_container.replace_item( {
            "id":id
            , "projectName": projectName 
            , "projectTypeId": projectTypeId
            , "projectDescription": projectDescription}
        )
    

if __name__ == "__main__":
    db = DBService(client)
    p = db.create_project("Test 1" , "123")
    print(p["id"])
    db.delete_project(p["id"] , p["projectTypeId"])
    # p = db.create_project("Test 1" , "test")
