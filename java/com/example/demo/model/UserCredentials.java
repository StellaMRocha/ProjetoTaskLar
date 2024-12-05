package com.example.demo.model;

public class UserCredentials {
    private String username;
    private String password;

    public void setUsername(String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username não pode ser vazio.");
        }
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        if (password == null || password.trim().isEmpty()) {
            throw new IllegalArgumentException("Password não pode ser vazio.");
        }
        this.password = password;
    }

    public String getUsername() {
        return username; // Aqui você deve retornar o valor da variável 'username'
    }
}
