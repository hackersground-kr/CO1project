package com.co1project.daeda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties
@SpringBootApplication
public class DaedaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DaedaApplication.class, args);
	}

}
