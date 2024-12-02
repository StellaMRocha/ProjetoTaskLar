import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Dashboard.css';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                toast.error('Você não está autenticado!');
                navigate('/login');
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/user', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    toast.error('Erro ao carregar informações do usuário.');
                    setError('Erro ao carregar informações do usuário.');
                }
            } catch (error) {
                toast.error('Erro ao conectar com o servidor.');
                setError('Erro ao conectar com o servidor.');
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        fetchUserData();

        // Limpeza do efeito, caso o componente seja desmontado
        return () => {
            setUserData(null);
            setLoading(false);
            setError(null);
        };
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Você saiu com sucesso!');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <h1>Bem-vindo ao Dashboard</h1>

            {loading ? (
                <p>Carregando informações...</p>
            ) : error ? (
                <p>{error}</p>
            ) : userData ? (
                <div>
                    <p>Nome: {userData.nome}</p>
                    <p>Email: {userData.email}</p>
                </div>
            ) : (
                <p>Informações do usuário não encontradas.</p>
            )}

            <button onClick={handleLogout}>Sair</button>
        </div>
    );
};

export default Dashboard;
