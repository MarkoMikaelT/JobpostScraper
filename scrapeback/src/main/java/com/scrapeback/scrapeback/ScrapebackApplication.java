package com.scrapeback.scrapeback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class ScrapebackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScrapebackApplication.class, args);
	}

}
