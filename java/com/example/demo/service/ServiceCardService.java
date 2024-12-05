package com.example.demo.service;

import com.example.demo.model.ServiceCard;
import com.example.demo.repository.ServiceCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceCardService {

    @Autowired
    private ServiceCardRepository serviceCardRepository;

    // Criar ou atualizar um ServiceCard
    public ServiceCard saveOrUpdateServiceCard(ServiceCard serviceCard) {
        return serviceCardRepository.save(serviceCard);
    }

    // Buscar todos os ServiceCards
    public List<ServiceCard> getAllServiceCards() {
        return serviceCardRepository.findAll();
    }

    // Buscar ServiceCard por ID
    public Optional<ServiceCard> getServiceCardById(Long id) {
        return serviceCardRepository.findById(id);
    }

    // Deletar um ServiceCard por ID
    public void deleteServiceCard(Long id) {
        serviceCardRepository.deleteById(id);
    }

    // Buscar ServiceCards por ID de Usuário (relacionamento com User)
    public List<ServiceCard> getServiceCardsByUserId(Long userId) {
        return serviceCardRepository.findByUserId(userId);
    }
}