import { useEffect, useState } from 'react';

const MyComponent = () => {
    const [data, setData] = useState(null);
    const token = 'your-jwt-token'; // Substitua isso com o seu token JWT, por exemplo, vindo de um estado ou do localStorage.

    useEffect(() => {
        fetch('http://localhost:8080/api/endpoint', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => setData(data))  // Atualiza o estado com os dados retornados
        .catch(error => console.error('Erro:', error));
    }, [token]); // O useEffect será chamado novamente caso o token mude.

    return (
        <div>
            <h1>Data from API</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default MyComponent;
