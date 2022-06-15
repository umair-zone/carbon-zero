from typing import Iterable , Union
from fastapi import APIRouter
from pydantic import BaseModel 
from decimal import Decimal

router = APIRouter()

class EnerySource(BaseModel):
    energySource : str
    energyAmount: Decimal

class CementParameter(BaseModel):
    projectId: str
    energySources: Iterable[EnerySource]
    manufactureAmount: Decimal
    CO2Capture: Decimal
    
class PowerPlantParameter(BaseModel):
    projectId: str
    energySources: Iterable[EnerySource]
    energyProduction: Iterable[EnerySource]

data = {
    "projectName": "ABC Cement",
    "projectType": "Cement Manufacture",
    "emissionEstimation": 12.2,
    "energyRequirement": 12.2,
    'numberOfTrees':100,
    "forestEstimation":[
        [
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "OOO" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
        ]
        ,
        [
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "BBB" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
        ],
        [
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "CCC" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
            {"treeType": "Bamboo" , "soilType": "type1", "noOfTrees": 50 , "coverageArea":50 , "timeToGrow":123},
        ]
    ]
    ,
    "emissionBreakDown":[
        {"amountOfEmission": 1000 , "causeOfEmission":"Energy Consumption", "suggestions":"Use energy effectify"},
        {"amountOfEmission": 1000 , "causeOfEmission":"Energy Consumption", "suggestions":"Use energy effectify"},
    ],
    "energyBreakdown":[
        {"source": "Coal" , "amount": 5000},
        {"source": "Wind" , "amount": 5000},
        {"source": "Solar" , "amount": 5000},
        {"source": "Hydro" , "amount": 5000}
    ]
    ,
    "timeline":[
        {"netEmission": 1000 , "month":1},
        {"netEmission": 700 , "month":2},
        {"netEmission": 500 , "month":3},
        {"netEmission": 200 , "month":4},
        {"netEmission": 10 , "month":5},
    ]
}


@router.post("/cement")
def create_report_cement(report:CementParameter):
    return data


@router.post("/powerplant")
def create_report_powerplant(report:PowerPlantParameter):
    return data


@router.post("/highway")
def create_report_highway(report:CementParameter):
    return data


