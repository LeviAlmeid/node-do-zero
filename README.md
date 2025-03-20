# Projeto Node.js com Fastify e PostgreSQL

## Descrição
Este projeto é uma API RESTful desenvolvida com **Node.js** e **Fastify**, utilizando um banco de dados **PostgreSQL** hospedado na Neon Database. O deploy foi realizado na plataforma **Render**.

## Tecnologias Utilizadas
- **Node.js**
- **Fastify**
- **PostgreSQL** (Neon Database)
- **Render** (Deploy)
- **dotenv** (Gerenciamento de variáveis de ambiente)

## Requisitos
Para executar o projeto localmente, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão recomendada: 16.x ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- PostgreSQL ou uma conta na [Neon Database](https://neon.tech/)

## Instalação
Clone este repositório e instale as dependências:

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

# Instalar dependências
npm install
# ou
yarn install
```

## Configuração
Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

```
PORT=3333
DATABASE_URL=sua_url_do_banco_de_dados
```

## Uso
### Executar o servidor localmente:
```bash
npm run dev
# ou
yarn dev
```

### Testar rotas com o arquivo `routes.http`
Você pode usar o [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) no VS Code para testar as rotas definidas em `routes.http`.

## Endpoints
### Criar um vídeo
```http
POST /videos
```
Body (JSON):
```json
{
    "title": "video node",
    "description": "primeiro video",
    "duration": 180
}
```

### Listar todos os vídeos
```http
GET /videos
```

### Atualizar um vídeo
```http
PUT /videos/:id
```
Body (JSON):
```json
{
    "title": "video atualizado",
    "description": "descrição atualizada",
    "duration": 200
}
```

### Deletar um vídeo
```http
DELETE /videos/:id
```

## Deploy
O projeto foi implantado na [Render](https://render.com/). Para acessá-lo, utilize a seguinte URL:

```
https://node-do-zero-700z.onrender.com
```

## Estrutura do Projeto
```
/seu-projeto
├── src
│   ├── database-postgres.js
│   ├── database-memory.js
│   ├── db.js
│   ├── server.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── routes.http
```

