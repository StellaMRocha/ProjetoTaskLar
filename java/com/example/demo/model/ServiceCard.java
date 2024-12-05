package com.example.demo.model;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;

@Entity
public class ServiceCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O título do serviço não pode ser vazio")
    private String title;

    @NotEmpty(message = "A descrição do serviço não pode ser vazia")
    private String description;

    @NotNull(message = "O preço do serviço não pode ser nulo")
    private BigDecimal price;

    private String location;  // Localização do serviço

    @ManyToOne
    @JoinColumn(name = "user_id")  // Chave estrangeira para o usuário
    private User user;

    // Construtores
    public ServiceCard() {
    }

    public ServiceCard(String title, String description, BigDecimal price, String location, User user) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.user = user;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // Método toString() para representar o objeto de maneira legível
    @Override
    public String toString() {
        return "ServiceCard{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", location='" + location + '\'' +
                ", user=" + user.getName() +
                '}';
    }
}