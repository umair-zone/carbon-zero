from pydantic import BaseModel
from decimal import Decimal
from typing import Iterable

class EnerySource(BaseModel):
    key:int
    energySource : str
    energyAmount: Decimal

class CementParameter(BaseModel):
    projectId: str
    projectName: str
    projectType: str
    projectDescription:str
    energySources: Iterable[EnerySource]
    manufactureAmount: Decimal
    CO2Capture: Decimal