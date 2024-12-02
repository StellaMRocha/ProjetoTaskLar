import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Cadastro.css'; // Estilo personalizado (opcional)

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
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
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Cadastro realizado com sucesso!');
                navigate('/login');
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Erro ao realizar cadastro.');
            }
        } catch (error) {
            toast.error('Erro ao conectar com o servidor.');
        }
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastrar</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => navigate('/login')}>Voltar ao Login</button>
        </div>
    );
};

export default Cadastro;
