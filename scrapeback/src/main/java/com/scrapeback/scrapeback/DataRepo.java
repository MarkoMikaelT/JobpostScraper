package com.scrapeback.scrapeback;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepo extends MongoRepository<datascrape, String> {

    Optional<List<datascrape>> findByRunDate(String runDate);
}
