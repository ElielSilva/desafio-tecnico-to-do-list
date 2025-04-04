# Desafio Técnico - To-Do List

Este é um projeto de lista de tarefas (To-Do List) desenvolvido para demonstrar o uso de tecnologias modernas para o desenvolvimento web e backend. O projeto utiliza uma arquitetura full-stack com React no frontend e Node.js com Sequelize no backend.

# Sumario
  - 1 - Tecnologias Utilizadas
  - 2 - Estrutura do Projeto
  - 3 - Scripts
  - 4 - 


## 1. Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js que facilita o gerenciamento de rotas e middleware.
- **Sequelize**: ORM (Object-Relational Mapper) para facilitar a interação com o banco de dados MySQL.
- **MySQL2**: Driver para MySQL utilizado em conjunto com o Sequelize.
- **Joi**: Biblioteca para validação de dados.
- **bcryptjs**: Biblioteca para encriptação de senhas.
- **jsonwebtoken**: Biblioteca para criação e validação de tokens JWT (JSON Web Tokens).
- **dotenv**: Carrega variáveis de ambiente a partir de arquivos `.env`.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes domínios.
- **Jest**: Framework de testes para o backend.
- **Supertest**: Biblioteca para realizar testes HTTP de integração.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM**: Biblioteca para gerenciar o roteamento de páginas dentro de um aplicativo React.
- **Vite**: Ferramenta de construção que oferece uma experiência de desenvolvimento rápida e otimizada.
- **Vitest**: Framework de testes de unidade para React.
- **@testing-library/react**: Biblioteca para realizar testes em componentes React de maneira simples e acessível.
- **ESLint**: Ferramenta de linting para garantir a qualidade do código JavaScript.
- **Babel**: Compilador JavaScript que converte o código moderno para versões mais compatíveis com navegadores antigos.

## 2. Estrutura do Projeto

### Backend
- **src/database**: Contém a configuração do banco de dados, incluindo a definição dos modelos e a conexão com o MySQL.
- **src/routes**: Definição das rotas da API.
- **src/controllers**: Lógica de controle das rotas.
- **src/services**: Lógica de serviço (ex: manipulação de dados).
- **src/middlewares**: Lógica de serviço para autenticação.
- **src/utils**: Utilitários gerais como validação, autenticação, etc.

### Frontend
- **src/components**: Componentes React que representam as partes da interface.
- **src/pages**: Páginas principais da aplicação.
- **src/services**: Funções que fazem chamadas à API do backend.
- **src/styles**: Arquivos de estilo CSS.



# 3. Scripts

### Backend

Aqui estão os scripts disponíveis no `package.json` para facilitar o desenvolvimento, testes e interação com o banco de dados:

### **Scripts para o Docker**

- **`container up`**: 
  - Subir o container Docker com `docker-compose`.
  - Comando: `docker-compose up -d`
  ```bash
     npm run container up
  ```

- **`container down`**:
  - Parar o container Docker com `docker-compose`.
  - Comando: `docker-compose down`
  ```bash
     npm run container down
  ```

### **Scripts para o Banco de Dados**

- **`db:dev:up`**:
  - Cria o banco de dados, executa as migrações e popula com dados de seed para o ambiente de desenvolvimento.
  - Comando: `sequelize db:create --env development && sequelize db:migrate --env development && sequelize db:seed:all --env development`
  ```bash
     npm run container db:dev:up
  ```

- **`db:dev:down`**:
  - Reverte todas as migrações e apaga o banco de dados no ambiente de desenvolvimento.
  - Comando: `sequelize db:migrate:undo:all --env development && sequelize db:drop --env development`
  ```bash
     npm run container db:dev:down
  ```

- **`db:start:up`**:
  - Cria o banco de dados, executa as migrações e popula com dados de seed para o ambiente de produção.
  - Comando: `sequelize db:create --env production && sequelize db:migrate --env production && sequelize db:seed:all --env production`
  ```bash
     npm run container db:start:up
  ```

- **`db:start:down`**:
  - Reverte todas as migrações e apaga o banco de dados no ambiente de produção.
  - Comando: `sequelize db:migrate:undo:all --env production && sequelize db:drop --env production`
  ```bash
     npm run container db:start:down
  ```

### **Scripts para Desenvolvimento e Produção**

- **`dev`**:
  - Inicia o servidor de desenvolvimento com `nodemon`, que reinicia automaticamente quando há mudanças no código.
  - Comando: `npx nodemon src/server.js --env development`
  ```bash
     npm run dev
  ```

- **`start`**:
  - Inicia o servidor em ambiente de produção.
  - Comando: `node src/server.js --env production`
  ```bash
     npm run start
  ```

### **Scripts de Testes**

- **`test`**:
  - Executa os testes usando o Jest.
  - Comando: `jest`
  ```bash
     npm test
  ```

- **`pretest`**:
  - Cria o banco de dados, executa as migrações e popula com dados de seed para o ambiente de teste antes de rodar os testes.
  - Comando: `sequelize db:create --env test && sequelize db:migrate --env test && sequelize db:seed:all --env test`

- **`posttest`**:
  - Reverte as migrações e apaga o banco de dados após a execução dos testes.
  - Comando: `sequelize db:migrate:undo:all --env test && sequelize db:drop --env test`

### Frontend

- **`npm run dev`**: Inicia o servidor de desenvolvimento utilizando o Vite.
- **`npm run test`**: Executa os testes do frontend utilizando o Vitest e Testing Library.

## 5. Como Baixar e Executar o Projeto

### 1. Clonar o Repositório
Clone o repositório para o seu ambiente local.

https:
```bash
  git clone https://github.com/ElielSilva/desafio-tecnico-to-do-list.git
```
ou ssh:
```bash
  git clone git@github.com:ElielSilva/desafio-tecnico-to-do-list.git
```

### 2. Iniciar a imagem no docker-compouse do banco de dados
Na raiz do projeto entre na pasta backend e suba a imagem docker:
```bash
  cd backend && npm run container up
```

### 3. subir a infraestrutura e popular o banco
ja na pasta backend execute a criação do banco, tabela e populaçao das tabelas

```bash
  npm run container db:dev:up
```

### 4. Subir o servidor backend 
```bash
  npm run dev
```

### 5. execute o frontend
abra outra terminal na raiz de projeto e execute o comando:
```bash
  cd frontend/ && npm run dev
```

## Atenção
Antes de rodar o projeto, é importante garantir que:

Docker esteja instalado e funcionando, caso esteja utilizando o Docker para o banco de dados. Caso contrário, verifique se o MySQL está instalado e rodando na porta 3306. Se você não estiver usando Docker, o MySQL deve estar acessível na porta 3306.

## Como Contribuir
Fique à vontade para contribuir com este projeto! Caso tenha sugestões, melhorias ou correções, basta seguir os passos abaixo:

 - Faça um fork deste repositório.

 - Crie uma branch com a sua alteração: git checkout -b minha-alteracao.

 - Faça o commit das suas alterações: git commit -m 'Adicionando minha alteração'.

 - Envie para a sua branch: git push origin minha-alteracao.

 - Abra um Pull Request explicando as alterações realizadas.






