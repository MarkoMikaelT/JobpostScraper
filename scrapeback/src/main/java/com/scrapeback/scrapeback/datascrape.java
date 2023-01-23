package com.scrapeback.scrapeback;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "scrape")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class datascrape {
    @Id
    private ObjectId id;

    private Integer python;
    private Integer javascript;
    private Integer java;
    private Integer cplus;
    private Integer sql;
    private Integer flutter;
    private Integer kotlin;
    private Integer php;
    private Integer csharp;
    private Integer html;
    private Integer css;
    private Integer typescript;
    private Integer rust;
    private Integer swift;
    private Integer nosql;
    private Integer checkedPages;
    private String runDate;
    private String runTime;
    
    
}