package com.example.demo.repository;

import com.example.demo.model.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.Optional;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
    boolean existsByEmail(String email);

    Usuario findByEmailAndSenha(String email, String senha);  // Retornar Optional

    Iterable<Usuario> findByDataNascimentoIsBetween(Date start, Date end);

    Iterable<Usuario> findByUltimoLoginAfter(Date lastDay);

    // Exemplo de consulta personalizada
    @Query("SELECT u FROM Usuario u WHERE u.dataNascimento BETWEEN :start AND :end")
    Iterable<Usuario> findUsuariosByDataNascimentoBetween(@Param("start") Date start, @Param("end") Date end);
}
