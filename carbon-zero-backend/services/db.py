from azure.cosmos import CosmosClient , DatabaseProxy, PartitionKey , ContainerProxy
import uuid
import csv
from datetime import datetime, date

get_id = lambda : uuid.uuid4().hex.lower()

URL = "https://carbonzero.documents.azure.com:443/"
KEY = "BRtpDcctxA4G2wzHjrc1qutU2ELSxi9iALhP4Ais3DgtAaVE0GUL2jRz7enpUTPvmyDGoWV1a4wICDdfxWMRAw=="


class DBService: 

    DB = "carbon_zero"

    def load_dummy_data(self):
        self.project_container.create_item(
            {
                "id": get_id(),
                "projectName": "Stronger Cement (pvt) Ltd",
                "projectTypeId": 1,
                "projectDescription": "Stronger Cement (pvt) Ltd is planning start their new plant at Kandy, Sri Lanka.",
                "projectLocation": "Sri Lanka"
            }
        )

        self.project_container.create_item(
            {
                "id": get_id(),
                "projectName": "Sourthern Highway - Area 23",
                "projectTypeId": 2,
                "projectDescription": "Estmation project for Southern Highway passing the area 23. Which is a highly forest covered area",
                "projectLocation": "Sri Lanka"
            }
        )

        self.project_container.create_item(
            {
                "id": get_id(),
                "projectName": "Noraichcholai Coal Power Plant",
                "projectTypeId": 3,
                "projectDescription": "New Norachcholai coal power plant is going to built in noraichcholai-Puttalam",
                "projectLocation": "Sri Lanka"
            }
        )

    def setup(client:CosmosClient):
        client.delete_database(DBService.DB)
        db = client.create_database_if_not_exists(DBService.DB)
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

        
        tree_container.create_item({"id": get_id() , "name": "Yellow Flame" ,"scientificName": "Peltophorum pterocarpum" , "favourableSoilType": "Sandy Loamy" , "agetoMaturity":5 , "absorbtionRate": 0.04 ,  "absorbtionRatein10Years":0.402 , "absorbtionRatein15Years":0.603 ,"absorbtionRatein20Years":0.804 , "areaRequirement": 12 *12 ,"advantages":"planted as a shade tree,have a dense spreading crown, fast-growing"})
        tree_container.create_item({"id": get_id() , "name": "Muruta" ,"scientificName": "Lagerstroemia speciosa" , "favourableSoilType": "Black Cotton" , "agetoMaturity":5 , "absorbtionRate": 0.024 ,  "absorbtionRatein10Years":0.236 , "absorbtionRatein15Years":0.354 ,"absorbtionRatein20Years":0.472 , "areaRequirement": 12 * 12 ,"advantages":"planted as a shade tree because has a wide spreading crown and a dense and widespread root system which has made it useful in plantings for erosion control , fast-growing,  popular in reforestration programmes "})
        tree_container.create_item({"id": get_id() , "name": "Cadamba" ,"scientificName": "Neolamarckia cadamba" , "favourableSoilType": "Clayey" , "agetoMaturity":4 , "absorbtionRate": 0.062 ,  "absorbtionRatein10Years":0.6225 , "absorbtionRatein15Years":0.9338 ,"absorbtionRatein20Years":1.245 , "areaRequirement": 4 * 4,"advantages":"fast growing and highly suitable for agroforestry systems"})
        tree_container.create_item({"id": get_id() , "name": "Ovila" ,"scientificName": "Polyalthia longifolia" , "favourableSoilType": "Sandy Loamy" , "agetoMaturity":5 , "absorbtionRate": 0.018 ,  "absorbtionRatein10Years":0.18 , "absorbtionRatein15Years":0.27 ,"absorbtionRatein20Years":0.36 , "areaRequirement": 2 * 2 ,"advantages":"planted for its dense shade and elegant appearance.The tree can be cut into various shapes and maintained in required sizes"})
        tree_container.create_item({"id": get_id() , "name": "Yellow Elder" ,"scientificName": "Tecoma stans" , "favourableSoilType": "Black Cotton" , "agetoMaturity":5 , "absorbtionRate": 0.005 ,  "absorbtionRatein10Years":0.048 , "absorbtionRatein15Years":0.072 ,"absorbtionRatein20Years":0.096 , "areaRequirement": 4 * 4 ,"advantages":"provides useful shade, especially in garden.can be planted as a live hedge."})
        tree_container.create_item({"id": get_id() , "name": "Indian Plum" ,"scientificName": "Ziziphus mauritiana" , "favourableSoilType": "Black Cotton" , "agetoMaturity":5 , "absorbtionRate": 0.065 ,  "absorbtionRatein10Years":0.648 , "absorbtionRatein15Years":0.972 ,"absorbtionRatein20Years":1.296 , "areaRequirement": 7 * 7,"advantages":"The fruit is edible and used to make medicine"})
        tree_container.create_item({"id": get_id() , "name": "Neem" ,"scientificName": "Azadirachta indica" , "favourableSoilType": "Clayey" , "agetoMaturity":3 , "absorbtionRate": 0.099 ,  "absorbtionRatein10Years":0.94 , "absorbtionRatein15Years":1.41 ,"absorbtionRatein20Years":1.88 , "areaRequirement": 5 * 5 ,"advantages":"A natural medicine, pesticide, and fertilizer.used as a detoxification"})
        tree_container.create_item({"id": get_id() , "name": "Karanda" ,"scientificName": "Milletia pinnata " , "favourableSoilType": "Black Cotton" , "agetoMaturity":5 , "absorbtionRate": 0.012 ,  "absorbtionRatein10Years":0.118 , "absorbtionRatein15Years":0.177 ,"absorbtionRatein20Years":0.236 , "areaRequirement": 5 *5 ,"advantages":"planted as a shade tree,have a dense spreading crown,grows well in humid and subtropical environments, drought tolerant, has fragrant flowers"})
        tree_container.create_item({"id": get_id() , "name": "Karthakolomban" ,"scientificName": "Mangifera indica" , "favourableSoilType": "Clayey" , "agetoMaturity":4 , "absorbtionRate": 0.018 ,  "absorbtionRatein10Years":0.1825 , "absorbtionRatein15Years":0.2738 ,"absorbtionRatein20Years":0.365 , "areaRequirement": 9*9 ,"advantages":"widely cultivated for commercial fruit production, as a garden tree, and as shade tree in many tropical and subtropical regions"})
        tree_container.create_item({"id": get_id() , "name": "Huri Maara" ,"scientificName": "Albizia procera" , "favourableSoilType": "Clayey" , "agetoMaturity":4 , "absorbtionRate": 0.086 ,  "absorbtionRatein10Years":0.86 , "absorbtionRatein15Years":1.29 ,"absorbtionRatein20Years":1.72 , "areaRequirement": 12 * 12,"advantages":"fast growing, long-lived (Trees may live for more than 30 years "})
        tree_container.create_item({"id": get_id() , "name": "Mal Maara" ,"scientificName": "Delonix regia" , "favourableSoilType": "Clayey" , "agetoMaturity":4 , "absorbtionRate": 0.012 ,  "absorbtionRatein10Years":0.015 , "absorbtionRatein15Years":0.0225 ,"absorbtionRatein20Years":0.03 , "areaRequirement": 12 *12,"advantages":"trees are almost evergreen, with broad-spreading, open, umbrella-shaped crowns, long lived and fast growing, use as a Ornamental tree due to colourful flowers "})
        tree_container.create_item({"id": get_id() , "name": "Bamboo" ,"scientificName": "Bambusa vulgaris" , "favourableSoilType": "Clayey" , "agetoMaturity":3 , "absorbtionRate": 0.029 ,  "absorbtionRatein10Years":0.294 , "absorbtionRatein15Years":0.4423 ,"absorbtionRatein20Years":0.589 , "areaRequirement": 5  * 5,"advantages":"often planted as an ornamental, windbreak, support and hedge plant.ornamental tree.Bamboo grows rapidly, needs very little water, fertilizer, or pesticides"})

        
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
        self.db = self.client.get_database_client(DBService.DB)
        self.project_container = self.db.get_container_client("Project")
        self.project_type_container = self.db.get_container_client("ProjectType")
        self.report_container = self.db.get_container_client("Report")
        self.tree_container = self.db.get_container_client("Tree")
        self.emission_container = self.db.get_container_client("Emission")
    
    
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


    def get_project(self, projectId:str):
        data =  self.project_container.query_items(
            query= f"SELECT *  FROM Project p WHERE p.id='{projectId}'", 
            enable_cross_partition_query=True)
        return [ d for d in data]

    def get_project_type(self, projectTypeId:str):
        pass



    def get_reports(self, projectId):
        data = self.report_container.query_items(
            query= f''' 
            SELECT * 
            FROM Report r 
            WHERE r.projectId = '{projectId}'  ''',
            enable_cross_partition_query=True
        )
        return [d for d in data ]


    def add_trees(self):
        pass


    def get_trees(self):
        data =  self.tree_container.query_items(query= 
            '''
            SELECT *
            FROM Tree t
            ''' , 
            enable_cross_partition_query=True)
        return [ d for d in data]
    
    def get_projects(self):
        data =  self.project_container.query_items(query= "SELECT p.id , p.projectName , p.projectTypeId,p.projectDescription,p.projectLocation,p.projectCreatedby,p.createdAt FROM Projects p" , enable_cross_partition_query=True)
        return [ d for d in data]

    def get_tree(self, tree_id):
        data =  self.tree_container.query_items(query= 
            f'''
            SELECT *
            FROM Tree t WHERE t.id = '{tree_id}'
            ''' , 
            enable_cross_partition_query=True)
        return [ d for d in data][0]


    def create_report(self , name , projectId ,params , ):
        return self.report_container.create_item({"id": get_id(),
        "name": name, 'projectId': projectId,"params": params , 
        "createdAt": datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
        "createdBy": "Jhon .A"
        })
    


    def get_report(self, reportId:str):
        data = self.report_container.query_items(
            query= f"SELECT r.id , r.projectId, r.params  FROM Report r WHERE r.id='{reportId}' " , 
            enable_cross_partition_query=True
        )
        try:
            return [d for d in data][0]
        except IndexError:
            raise InvalidReportIDError

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


class InvalidReportIDError(Exception):
    pass

