package com.scrapeback.scrapeback;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DataService {

    @Autowired
    private DataRepo dataRepo;

    public List<datascrape> getAllScrap(){
        System.out.println(dataRepo.count());
        System.out.println(dataRepo.findAll().toString());
        return dataRepo.findAll();
    }

    public Optional<List<datascrape>> getByDate(String runDate){
        return dataRepo.findByRunDate(runDate);
    }
}
