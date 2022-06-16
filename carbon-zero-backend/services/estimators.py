from decimal import Decimal
import sys
from pulp import LpProblem , LpMinimize , LpVariable , lpSum , const , LpStatus
from .db import DBService
# from ..models import CementParameter , EnerySource

dbs = DBService()



def co2_from_cement(amount_cement:Decimal , energy_from_coal:Decimal):
    return dbs.get_emission("CEMENT")['emission'] * amount_cement + dbs.get_emission("ENERGYCOAL")['emission'] * energy_from_coal

def co2_from_highway(number_vehicles ):
    return 100

def co2_from_powerplant():
    return 100



def co2_estimator(project_type_id:int , params):
    print(params)
    
    total_co2_emitted = 0
    
    if project_type_id == 1:
        coal_energy = 0
        for s in params["energySources"]:
            coal_energy = s["energyAmount"] if s["energySource"] == 'Coal' else coal_energy
        
        total_co2_emitted += co2_from_cement(
            amount_cement= params["manufactureAmount"],
            energy_from_coal= coal_energy
        )
    if project_type_id == 2:
        total_co2_emitted += co2_from_highway()
    if project_type_id == 3:
        total_co2_emitted += co2_from_cement()

    return total_co2_emitted

def read_tree_data():
    data = []
    for t in dbs.get_trees():
        print(t)
        data.append({
            "id": t["id"],
            "absorbtionRate": t["absorbtionRate"] * 1000, #converting to kgs
            "area": t["areaRequirement"] 
        })

    return data


def forest_estimator(amount_of_co2:Decimal , minimum_by_user={}, maximum_by_user={}):
    tree_data = read_tree_data()
    trees = [t["id"] for t in tree_data]
    absorbtion_rate = {}
    area = {}
    for t in tree_data:
        absorbtion_rate[t["id"]] = t["absorbtionRate"]
        area[t["id"]] = t["area"]
    
    tree_vars = LpVariable.dicts("",trees,
                             lowBound=0,                        
                             cat=const.LpInteger)

    for i in trees:
        tree_vars[i].upBound = maximum_by_user.get(i, sys.maxsize )
        tree_vars[i].lowBound = minimum_by_user.get(i, 0)
    
    prob = LpProblem("TreesProblem", LpMinimize)
    prob += lpSum([ area[i]*tree_vars[i]  for i in trees])
    prob += lpSum([absorbtion_rate[x] * tree_vars[x] for x in trees]) >= amount_of_co2, "CO2 Minimum"

    prob.solve()

    return [ {"tree_id": var.name[1:] , "number_of_trees": var.value()} for var in prob.variables() ]


def get_absorbion_rate_at_month(grown_absorbtion, maturity_in_months , month):
    if month < maturity_in_months:
        return (grown_absorbtion/maturity_in_months)*month
    return grown_absorbtion



def get_report(project_id , params , minimum_by_user={} , maximum_by_user={}):
    data = {}
    projects = dbs.get_project("aedfb6db2d384a2bb0f6d79bc5ac0d50")
    if len(projects) == 0 :
        return 
    project_type_id = projects[0]["projectTypeId"]
    
    data = data | {"projectName" : projects[0]["projectName"] , "projectType": "Cement Manufacture" }
    
    
    co2_emission = co2_estimator(project_type_id, params)
    trees = forest_estimator(co2_emission , minimum_by_user , maximum_by_user)

    

    data["emissionEstimation"] = co2_emission
    data["forestEstimation"] = [t for t in trees]
    data["numOfTrees"] = sum( [t["number_of_trees"] for t in trees])
    
    timeline = []
    
    for m in range(8*12):
        total_absorbtion = 0
        for t in trees:
            tree = dbs.get_tree(t["id"])
            grown_absrobtion = tree["absorbtionRate"] * 1000
            maturity_in_months = tree["agetoMaturity"] * 12
            total_absorbtion += get_absorbion_rate_at_month(grown_absrobtion , maturity_in_months, m)
        
        timeline.append({"netEmission": co2_emission - total_absorbtion,"month": m})
    
    data["timeline"] = timeline   

    return data

if __name__ == "__main__":
    # read_tree_data()
#    print(co2_from_cement(100 , 100))
    # print(dbs.get_project("3b27f01fb0df4f24a46090a4cb3c3c0c"))
    get_report()

