import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Importando Link do react-router-dom
import { toast } from 'react-toastify';
import './Login.css'; // Estilos personalizados
import logo from '../../assets/logo.jpg'; // Importação da imagem

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Login realizado com sucesso!');
                navigate('/search') // Redireciona ao dashboard ou página inicial
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Erro ao realizar login.');
            }
        } catch (error) {
            toast.error('Erro ao conectar com o servidor.');
        }
    };

    return (
        <div className="login-container">
            {/* Exibição da logo */}
            <img src={logo} alt="Logo do Sistema" className="login-logo" />
            
            {/* Formulário de Login */}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            
            {/* Links adicionais */}
            <div className="login-links">
                <Link to="/esqueceusenha" className="login-link">
                    Esqueceu sua senha?
                </Link>
                <Link to="/register" className="login-link"> {/* Corrigido para /register */}
                    Não possui uma conta? Cadastre-se
                </Link>
            </div>
        </div>
    );
};

export default Login;
