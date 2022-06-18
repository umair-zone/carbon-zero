import email
import jwt
from pydantic import BaseModel
import requests
from cryptography.x509 import load_pem_x509_certificate
from cryptography.hazmat.backends import default_backend

class User(BaseModel):
    name : str
    email : str

def authenticate(request , token):
    data = validate_id_token(token)
    request.state.user = User(name=data["name"], email=data["email"])
    return request


def validate_id_token(id_token):
    tenant_id = '8b8e48d7-1f65-46a5-bc1a-ef536b2d8188'
    app_id = '2de9a5ee-2d63-4a63-8a68-d3b933c4b5eb'
    token_header = jwt.get_unverified_header(id_token)

    res = requests.get(f'https://login.microsoftonline.com/{tenant_id}/.well-known/openid-configuration')
    jwk_uri = 'https://login.microsoftonline.com/8b8e48d7-1f65-46a5-bc1a-ef536b2d8188/discovery/v2.0/keys'  #res.json()['jwks_uri']
    
   
    x5c = None
    res = requests.get(jwk_uri)
    jwk_keys = res.json()
    for key  in jwk_keys["keys"]:
        if key["kid"] == token_header["kid"]:
            x5c = key['x5c']

    cert = "".join([
         '-----BEGIN CERTIFICATE-----\n',
         x5c[0],
         '\n-----END CERTIFICATE-----\n',
    ])
    public_key =  load_pem_x509_certificate(cert.encode(), default_backend()).public_key()
    return jwt.decode(
         id_token,
    public_key,
    algorithms='RS256',
    audience=app_id,
    )


