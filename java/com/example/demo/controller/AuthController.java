package com.example.demo.controller;

import com.example.demo.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.AuthResponse;
import com.example.demo.model.UserCredentials;
import com.example.demo.service.AuthService;
@RestController
@RequestMapping("/login")
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private UsuarioController controle;
    @PostMapping
    public ResponseEntity<?> login(@RequestBody UserCredentials userCredentials) {
        Usuario encontrado = controle.verificaLogin(userCredentials.getUsername(), userCredentials.getPassword());
        if (encontrado != null) {
            Long userId = encontrado.getId();
            String userType = encontrado.getNome();
            String token = authService.generateToken(encontrado.getEmail(), userId, userType);
            return ResponseEntity.ok(new AuthResponse(token));
        } else {
            return ResponseEntity.status(401).body("Credenciais inválidas");
        }
    }
}

