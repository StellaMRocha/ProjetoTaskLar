package com.example.demo.repository;

import com.example.demo.model.Categoria;
import org.springframework.data.repository.CrudRepository;

public interface CategoriaRepositorio extends CrudRepository<Categoria, Long> {
}
