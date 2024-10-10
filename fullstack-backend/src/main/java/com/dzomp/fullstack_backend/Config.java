package com.dzomp.fullstack_backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:config.properties")
@PropertySource("classpath:application.properties")
public class Config {
}
