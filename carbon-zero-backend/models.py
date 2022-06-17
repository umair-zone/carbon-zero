# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0

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