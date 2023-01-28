package com.scrapeback.scrapeback;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/Scrape")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping
    public ResponseEntity<List<datascrape>> getAllScrap(){
        return new ResponseEntity<List<datascrape>>(dataService.getAllScrap(), HttpStatus.OK);
    }
    
    @GetMapping("/{runDate}")
    public ResponseEntity<Optional<List<datascrape>>> getByDate(@PathVariable String runDate){
        return new ResponseEntity<Optional<List<datascrape>>>(dataService.getByDate(runDate), HttpStatus.OK);
    }
}
