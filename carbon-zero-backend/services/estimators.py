from decimal import Decimal
import sys
from pulp import LpProblem , LpMinimize , LpVariable , lpSum , const , LpStatus
from db import DBService

dbs = DBService()


def co2_estimator():
    pass


def read_tree_data():
    return dbs.get_trees()






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

    
if __name__ == "__main__":
    # read_tree_data()
    print(forest_estimator(1000))