package com.scrapeback.scrapeback;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Scrape1")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class datascrape {
    @Id
    private ObjectId id;
    private Integer python;
    private Integer javascript;
    private Integer java;
    private Integer sql;
    private Integer flutter;
    private Integer kotlin;
    private Integer php;    
    private Integer html;
    private Integer css;
    private Integer typescript;
    private Integer rust;
    private Integer swift;
    private Integer nosql;
    private Integer cplus;
    private Integer csharp;
    private Integer checkedPages;
    private String runDate;
    private String runTime;

    
    // public datascrape(Integer python, Integer javascript, Integer java, Integer sql, Integer flutter, 
    //                     Integer kotlin, Integer php, Integer html, Integer css, Integer typescript, Integer rust,
    //                     Integer swift, Integer nosql, Integer checkedPages, String runDate, String runTime,
    //                     Integer cplus, Integer csharp){

    //     this.python = python;
    //     this.javascript = javascript;
    //     this.java = java;
    //     this.sql = sql;
    //     this.flutter = flutter;
    //     this.php = php;
    //     this.html = html;
    //     this.css = css;
    //     this.typescript = typescript;
    //     this.rust = rust;
    //     this.swift = swift;
    //     this.nosql = nosql;
    //     this.checkedPages = checkedPages;
    //     this.runDate = runDate;
    //     this.runTime = runTime;
    //     this.cplus = cplus;
    //     this.csharp = csharp;
    // }
}