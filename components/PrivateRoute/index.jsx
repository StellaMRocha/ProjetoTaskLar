import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Estado que verifica a autenticação
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Se o token estiver presente, considera o usuário autenticado
            setIsAuthenticated(true);
        } else {
            // Se não houver token, o usuário não está autenticado
            setIsAuthenticated(false);
            toast.error('Você precisa estar logado para acessar esta página.');
            navigate('/login'); // Redireciona para a página de login
        }
    }, [navigate]); // O useEffect é disparado sempre que o componente for montado ou o `navigate` mudar

    if (isAuthenticated === null) {
        // Exibindo um componente de carregamento enquanto verifica a autenticação
        return (
            <div className="loading-container">
                <p>Carregando...</p>
            </div>
        );
    }

    // Se o usuário estiver autenticado, renderiza os filhos (a página privada)
    return isAuthenticated ? children : null;
};

export default PrivateRoute;
