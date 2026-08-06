# 🎬 API Mongo

API REST desenvolvida em **Node.js**, **Express** e **PostgreSQL**, oferecendo autenticação com **JWT**, controle de acesso às rotas, paginação, rate limiting e operações completas de CRUD para gerenciamento de filmes e gêneros.

---
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express](https://img.shields.io/badge/Express-4.x-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-18-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
---

## 📋 Índice

- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Executando a aplicação](#-executando-a-aplicação)
- [Autenticação](#-autenticação)
- [Endpoints](#-endpoints)
- [Paginação](#-paginação)
- [Rate Limiting](#-rate-limiting)
- [Segurança](#-segurança)
- [Exemplo de Resposta](#-exemplo-de-resposta)
- [Licença](#-licença)

---

# 📖 Sobre

Esta API foi desenvolvida como projeto de estudo para consolidar conhecimentos em desenvolvimento Backend utilizando Node.js.

A aplicação possui autenticação baseada em JWT, proteção de rotas, paginação, limitação de requisições (Rate Limiting) e comunicação com banco de dados PostgreSQL.

O projeto segue uma arquitetura organizada em camadas, separando responsabilidades entre Controllers, Models, Routes, Middlewares e Services.

---

# 🚀 Tecnologias

- Node.js
- Express
- PostgreSQL
- JWT (JSON Web Token)
- Bcrypt
- Dotenv
- Express Rate Limit
- CORS

---

# 🏗 Arquitetura

```
Cliente
   │
HTTP Request
   │
Routes
   │
Middleware
   │
Controller
   │
Model
   │
PostgreSQL
```

---

# ⚙️ Instalação

Instale as dependências

```bash
npm install
```

---

# ▶️ Executando a aplicação

Modo desenvolvimento

```bash
npm run dev
```

Modo produção

```bash
npm start
```

---

# 🔐 Autenticação

O login utiliza autenticação Basic.

Após autenticar, a API retorna um JWT.

---

# 📄 Paginação

As listagens aceitam parâmetros de paginação.

Exemplo

```
GET /filmes?page=1&limit=10
```

Resposta

```json
{
    "page":1,
    "limit":10,
    "totalItems":55,
    "totalPages":6,
    "data":[]
}
```

---

# 🚦 Rate Limiting

A API utiliza Rate Limiting para evitar excesso de requisições.

Caso o limite seja excedido, será retornado:

```http
429 Too Many Requests
```

---

# 🔒 Segurança

A API implementa:

- JWT
- Basic Auth
- Rate Limiting
- Senhas criptografadas com Bcrypt
- Variáveis de ambiente utilizando Dotenv
- Separação entre autenticação e autorização
- Proteção de rotas privadas

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

- Arquitetura MVC
- Organização em camadas
- CRUD completo
- Autenticação JWT
- Middleware
- Paginação
- Rate Limiting
- Integração com PostgreSQL
- Tratamento de erros
- Variáveis de ambiente
- Boas práticas em APIs REST

---

# 👨‍💻 Autor

**Evandro Silva**

Software Engineer

LinkedIn: (https://www.linkedin.com/in/evandro-taylor/)

---

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e demonstração de conhecimentos em desenvolvimento Backend.