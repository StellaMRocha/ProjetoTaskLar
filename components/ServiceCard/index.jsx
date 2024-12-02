import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para acessar os parâmetros da URL
import './ServiceCard.css';

const ServiceCard = () => {
  const { serviceName, serviceDescription, servicePrice } = useParams(); // Obtém os parâmetros da URL
  const [service, setService] = useState(null);

  useEffect(() => {
    // Aqui você pode buscar ou processar os dados com base nos parâmetros recebidos
    setService({
      name: serviceName,
      description: serviceDescription.replace(/-/g, ' '), // Para restaurar a descrição original
      priceRange: servicePrice.split('-').map(price => parseInt(price)),
    });
  }, [serviceName, serviceDescription, servicePrice]);

  if (!service) {
    return <p>Serviço não encontrado.</p>;
  }

  return (
    <div className="service-card">
      <h4>{service.name}</h4>
      <p><strong>Categoria:</strong> {service.category}</p>
      <p><strong>Descrição:</strong> {service.description}</p>
      <p><strong>Preço:</strong> R$ {service.priceRange[0]} - R$ {service.priceRange[1]}</p>
      <p><strong>Distância:</strong> {service.distance} Km</p>
      <p><strong>Avaliação:</strong> {service.rating} ★</p>
    </div>
  );
};

export default ServiceCard;
