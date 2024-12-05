create table usuario(
	id bigint auto_increment primary key,
	nome text,
	email text,
	senha text,
	data_nascimento date,
	ultimo_login timestamp,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp on update current_timestamp
);

create table categoria(
    id bigint auto_increment primary key,
    nome text
);

CREATE TABLE IF NOT EXISTS diarista (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_usuario BIGINT NOT NULL,
    tipo_servico TEXT,  -- Exemplo: limpeza, jardinagem, etc
    disponibilidade BOOLEAN DEFAULT TRUE,  -- Disponibilidade do diarista
    valor_hora DECIMAL(10,2),  -- Preço por hora do serviço
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE IF NOT EXISTS endereco (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_usuario BIGINT NOT NULL,  -- Relacionado ao usuário ou diarista
    rua TEXT,
    numero TEXT,
    bairro TEXT,
    cidade TEXT,
    estado TEXT,
    cep TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);


CREATE TABLE IF NOT EXISTS perfil (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_usuario BIGINT NOT NULL,
    foto_perfil TEXT,  -- Caminho ou URL da foto de perfil
    descricao TEXT,    -- Descrição do perfil
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE IF NOT EXISTS servico (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_diarista BIGINT NOT NULL,  -- Relacionado ao diarista
    descricao TEXT,  -- Descrição do serviço
    preco DECIMAL(10,2),  -- Preço do serviço
    duracao_estimativa INT,  -- Duração estimada do serviço (em minutos)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_diarista) REFERENCES diarista(id)
);


