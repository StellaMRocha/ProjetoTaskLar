import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import EsqueceuSenha from './components/EsqueceuSenha';
import Dashboard from './components/Dashboard';
import SearchService from './components/SearchService';
import ServiceCard from './components/ServiceCard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <ToastContainer autoClose={3000} hideProgressBar />
            <Routes>
                {/* Rotas Públicas */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Cadastro />} />
                <Route path="/esqueceusenha" element={<EsqueceuSenha />} />
                <Route path="/search" element={<SearchService />} />
                
                {/* Alteração da Rota para ServiceCard */}
                <Route path="/service/:serviceName/:serviceDescription/:servicePrice" element={<ServiceCard />} />

                {/* Rotas Privadas */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                {/* Página 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

// Componente para páginas não encontradas
const NotFound = () => (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: 'red' }}>404 - Página não encontrada</h1>
        <p style={{ fontSize: '1.5rem' }}>A página que você está tentando acessar não existe.</p>
    </div>
);

export default App;
