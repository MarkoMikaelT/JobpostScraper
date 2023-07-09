
from datetime import datetime
from bs4 import BeautifulSoup as bs
import requests
import functools as ft
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import csv
import re

import json
from pymongo import MongoClient

#timer for run time
start_time = time.time()

#Run with Firefox
""" from webdriver_manager.firefox import GeckoDriverManager
driver = webdriver.Firefox(executable_path=GeckoDriverManager().install()) """

#Run with Chrome
from webdriver_manager.chrome import ChromeDriverManager
driver = webdriver.Chrome(ChromeDriverManager().install())

credPath = "./noExport/cred.json"

def Main():

    #set how many pages are gone through | Each page has 20 jobs -> (1 + runCount)*20 = jobs scraped
    runCount = 4
    k = 0
    pageCount = 0

    #KEYWORDS TO FIND
    keyWords = [r"python", r"javascript", r"java(?!script)",
                r"c\+\+", r"(?<!no)sql", r"flutter", r"kotlin",
                r"php", r"c#", r"html", r"css",
                r"typescript", r"(?<![a-z])rust", r"swift", r"nosql"]

    #data to send to MongoDB
    mongoSearchCount = {"python": 0, "javascript": 0, "java": 0,
                            "cplus": 0, "sql": 0, "flutter": 0, "kotlin": 0,
                            "php": 0, "csharp": 0, "html": 0, "css": 0,
                            "typescript": 0, "rust": 0, "swift": 0, "nosql": 0}

    #keyString = persistentSearchCount.keys()
    csvKeyString = mongoSearchCount.keys()
    searchCount = {}

    while k  <= runCount:

        html_text = requests.get('https://duunitori.fi/tyopaikat?haku=Tieto-%20ja%20tietoliikennetekniikka%20(ala)&order_by=date_posted&sivu=' + str(k)).text
        soppa = bs(html_text, 'html.parser') 

        jobs = soppa.find_all('a', class_="job-box__hover gtm-search-result")

        for link in jobs:
            urlJob = link.get('href')
            #print('https://duunitori.fi' + urlJob)
            driver.get('https://duunitori.fi' + urlJob)
            driver.implicitly_wait(2)
            jobPost = driver.find_element(By.CLASS_NAME, 'description-box').text.lower()

            repls = ('\n', ''), ('<br>', '')
            jobPost = ft.reduce(lambda a, kv: a.replace(*kv), repls, jobPost)
            ExportFullPostToMongo(jobPost)
            i = 0
            #print(jobPost)
            for key in keyWords:
                ikey = list(mongoSearchCount)[i]
                searchCount[ikey] = len(re.findall(key, jobPost, re.IGNORECASE))
                mongoSearchCount[ikey] += searchCount[ikey]

                # if mongoSearchCount["rust"] > 0:
                #     print('https://duunitori.fi' + urlJob)
                i += 1
            
            searchCount.clear()
            pageCount += 1
            
        k += 1

    print(mongoSearchCount)
    driver.quit()
    print("Process finished --- %s seconds ---" % (time.time() - start_time))

    mongoSearchCount.update({"checkedPages": pageCount})
    mongoSearchCount.update({"runDate": datetime.today().strftime("%d-%m-%Y")})
    mongoSearchCount.update({"runTime": datetime.today().strftime("%H:%M:%S")})

    AddToCSV(mongoSearchCount, csvKeyString)
    ExportToMongo(mongoSearchCount)

def AddToCSV(data: dict, keyString: dict):
    with open("democsv.csv", "a") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames = keyString)
        writer.writeheader()
        writer.writerows([data]) 

def ConnectToMongo():
    file = open(credPath)
    creds = json.load(file)

    clusterConn = f"mongodb+srv://{creds['name']}:{creds['pass']}@scrapecluster.bvokbsk.mongodb.net/ScrapedData?retryWrites=true&w=majority"
    client = MongoClient(clusterConn)
    return client

def ExportToMongo(data: dict):
    client = ConnectToMongo()
    db = client.ScrapedData.Scrape1
    db.insert_one(data)

def ExportFullPostToMongo(jobpost: str):
    dataToSend = {"Jobpost": jobpost, "runDate": datetime.today().strftime("%d-%m-%Y"), "runTime": datetime.today().strftime("%H:%M:%S")}

    client = ConnectToMongo()
    db = client.ScrapedData.ScrapeFullDescription
    db.insert_one(dataToSend)

Main()
