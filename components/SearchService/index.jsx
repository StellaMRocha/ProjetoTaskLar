import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchService.css';

const servicesData = [
    { 
        name: 'Pedro', 
        priceRange: [100, 200], 
        distance: 4.2, 
        avatar: require('../../assets/avatar1.jpg'), 
        description: 'Serviço de limpeza de casa, com foco em organização geral.', 
        rating: 4.5, 
        category: 'Limpeza' 
    },
    { 
        name: 'João', 
        priceRange: [300, 500], 
        distance: 5.3, 
        avatar: require('../../assets/avatar2.jpg'), 
        description: 'Especialista em jardinagem e manutenção de áreas externas.', 
        rating: 4.8, 
        category: 'Jardinagem' 
    },
    { 
        name: 'Maria', 
        priceRange: [400, 500], 
        distance: 3.0, 
        avatar: require('../../assets/avatar3.jpg'), 
        description: 'Profissional qualificada para serviços de costura e ajustes em roupas.', 
        rating: 4.7, 
        category: 'Costura' 
    },
];

const ServiceCard = ({ service }) => (
    <div className="service-card">
        <img src={service.avatar} alt={`Avatar de ${service.name}`} className="service-avatar" />
        <div className="service-info">
            <h4>{service.name}</h4>
            <p><strong>Categoria:</strong> {service.category}</p>
            <p><strong>Descrição:</strong> {service.description}</p>
            <p><strong>Preço:</strong> R$ {service.priceRange[0]} - R$ {service.priceRange[1]}</p>
            <p><strong>Distância:</strong> {service.distance} Km</p>
            <p><strong>Avaliação:</strong> {service.rating} ★</p>
        </div>
    </div>
);

const SearchService = () => {
    const [services, setServices] = useState(servicesData);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filteredServices = services.filter((service) =>
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase()) ||
        service.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="search-service-container">
            <header className="search-header">
                <button 
                    className="back-button" 
                    aria-label="Voltar" 
                    onClick={() => navigate('/dashboard')}
                >
                    ←
                </button>
                <button 
                    className="location-button" 
                    aria-label="Escolher localização"
                >
                    Escolher localização
                </button>
            </header>
            <input
                type="text"
                className="search-bar"
                placeholder="Digite o serviço que procura"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <h3>Recomendados</h3>
            <div className="services-list">
                {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                        <ServiceCard key={service.name} service={service} />
                    ))
                ) : (
                    <p className="no-services-message">Nenhum serviço encontrado.</p>
                )}
            </div>
            <footer className="search-footer">
                <button 
                    className="footer-button" 
                    onClick={() => navigate('/dashboard')}
                >
                    Início
                </button>
                <button 
                    className="footer-button" 
                    onClick={() => navigate('/service-card')}
                >
                    Serviços
                </button>
                <button 
                    className="footer-button" 
                    onClick={() => navigate('/profile')}
                >
                    Perfil
                </button>
            </footer>
        </div>
    );
};

export default SearchService;
