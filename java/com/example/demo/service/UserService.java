package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    // Injeção do repositório de usuários
    @Autowired
    private UserRepository userRepository;

    // Criar ou atualizar um usuário
    public User saveOrUpdateUser(User user) {
        return userRepository.save(user);
    }

    // Buscar todos os usuários
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Buscar usuário por ID
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Deletar um usuário por ID
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Buscar um usuário pelo e-mail (opcional)
    public Optional<User> getUserByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email));
    }
}