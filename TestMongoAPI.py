import requests
import json

credPath = "./noExport/cred.json"

def Main():

    file = open(credPath)
    creds = json.load(file)

    url = f"https://data.mongodb-api.com/app/{creds['apiId']}/endpoint/data/v1/action/find"
    payload = json.dumps({
        "collection": "Scrape1",
        "database": "ScrapedData",
        "dataSource": "ScrapeCluster",
        "filter": {
            "runDate":"17/01/2023",
        }
    })
    headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': f"{creds['apiKey']}", 
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)

Main()