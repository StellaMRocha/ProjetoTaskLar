package com.example.demo.controller;

import com.example.demo.model.ServiceCard;
import com.example.demo.repository.ServiceCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servicecards")
public class ServiceCardController {

    @Autowired
    private ServiceCardRepository serviceCardRepository;

    @GetMapping
    public List<ServiceCard> getAllServiceCards() {
        return serviceCardRepository.findAll();
    }

    @PostMapping
    public ServiceCard createServiceCard(@RequestBody ServiceCard serviceCard) {
        return serviceCardRepository.save(serviceCard);
    }

    @GetMapping("/{id}")
    public ServiceCard getServiceCardById(@PathVariable Long id) {
        return serviceCardRepository.findById(id).orElseThrow(() -> new RuntimeException("ServiceCard not found"));
    }

    @PutMapping("/{id}")
    public ServiceCard updateServiceCard(@PathVariable Long id, @RequestBody ServiceCard serviceCardDetails) {
        ServiceCard serviceCard = serviceCardRepository.findById(id).orElseThrow(() -> new RuntimeException("ServiceCard not found"));
        serviceCard.setTitle(serviceCardDetails.getTitle());
        serviceCard.setDescription(serviceCardDetails.getDescription());
        serviceCard.setPrice(serviceCardDetails.getPrice());
        // Atualize outros campos, se necessário
        return serviceCardRepository.save(serviceCard);
    }

    @DeleteMapping("/{id}")
    public void deleteServiceCard(@PathVariable Long id) {
        ServiceCard serviceCard = serviceCardRepository.findById(id).orElseThrow(() -> new RuntimeException("ServiceCard not found"));
        serviceCardRepository.delete(serviceCard);
    }
}