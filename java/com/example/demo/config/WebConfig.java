package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Aplica CORS para todas as rotas
                .allowedOrigins("http://localhost:3000") // Permite requisições do frontend no localhost
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
                .allowedHeaders("Authorization", "Content-Type", "Cache-Control") // Cabeçalhos permitidos
                .exposedHeaders("Authorization") // Permite que o cabeçalho Authorization seja visível no cliente
                .allowCredentials(true); // Permite o envio de cookies e credenciais
    }
}
