import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EsqueceuSenha.css';

const EsqueceuSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de envio de solicitação de recuperação de senha (substitua por uma API real)
    if (email) {
      // Aqui você deve chamar a API para enviar o email para recuperação de senha
      setMessage('Se o e-mail estiver cadastrado, um link para redefinir a senha será enviado.');
    } else {
      setMessage('Por favor, insira um endereço de e-mail válido.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Esqueceu sua Senha?</h2>
        <p>Digite seu e-mail abaixo para receber as instruções para redefinir sua senha.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>

        {message && <p className="message">{message}</p>}

        <Link to="/login" className="back-to-login">Voltar para Login</Link>
      </div>
    </div>
  );
};

export default EsqueceuSenha;
