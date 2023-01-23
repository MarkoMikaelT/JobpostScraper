package com.scrapeback.scrapeback;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataService {

    @Autowired
    private DataRepo dataRepo;
    public List<datascrape> getAllScrap(){
        return dataRepo.findAll();
    }
}
