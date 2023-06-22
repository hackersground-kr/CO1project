package com.co1project.daeda.global.properties;

import lombok.Data;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties("jwt.security")
public class JwtProperties {
    private String accessKey;
    private String refreshKey;
}
