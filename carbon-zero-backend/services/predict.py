import pickle 
import os
from numpy import double


def vehicle_carbon_predict(num_cylinders:double, engine_size:double, fuel_type:double):
    # load saved model
    with open('carbon-zero-backend/services/vehicle_carbon' , 'rb') as f:
        lr = pickle.load(f)
    predict=lr.predict([[num_cylinders,engine_size,fuel_type]])
    return predict


print(vehicle_carbon_predict(4,5.6,3))
