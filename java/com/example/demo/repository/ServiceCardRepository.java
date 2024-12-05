package com.example.demo.repository;

import com.example.demo.model.ServiceCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceCardRepository extends JpaRepository<ServiceCard, Long> {
    // Métodos personalizados podem ser definidos aqui, por exemplo:
    List<ServiceCard> findByUserId(Long userId);
}