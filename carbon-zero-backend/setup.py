from azure.cosmos import CosmosClient
from services.db import DBService

URL = "https://carbonzero.documents.azure.com:443/"
KEY = "BRtpDcctxA4G2wzHjrc1qutU2ELSxi9iALhP4Ais3DgtAaVE0GUL2jRz7enpUTPvmyDGoWV1a4wICDdfxWMRAw=="


def main():
    DBService.setup(CosmosClient(URL, KEY))
    DBService().load_dummy_data()


if __name__ == "__main__":
    main()