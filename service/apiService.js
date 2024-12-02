
// Função para fazer requisições GET com token JWT
export const fetchData = async (token) => {
    try {
        const response = await fetch('http://localhost:8080/api/endpoint', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adiciona o token JWT no cabeçalho Authorization
            }
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na requisição, status: ' + response.status);
        }

        // Converte a resposta em JSON e retorna os dados
        const data = await response.json();
        return data;
    } catch (error) {
        // Se ocorrer algum erro, lança a exceção
        throw error;
    }
};

// Função para fazer requisições POST (Exemplo de como pode ser usado)
export const postData = async (url, body, token) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adiciona o token JWT no cabeçalho Authorization
            },
            body: JSON.stringify(body) // Converte o corpo da requisição em JSON
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na requisição, status: ' + response.status);
        }

        // Converte a resposta em JSON e retorna os dados
        const data = await response.json();
        return data;
    } catch (error) {
        // Se ocorrer algum erro, lança a exceção
        throw error;
    }
};