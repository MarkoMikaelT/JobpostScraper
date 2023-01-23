package com.scrapeback.scrapeback;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/scraped1")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping
    public ResponseEntity<List<datascrape>> getAllScrap(){
        return new ResponseEntity<List<datascrape>>(dataService.getAllScrap(), HttpStatus.OK);
    }
    
}
