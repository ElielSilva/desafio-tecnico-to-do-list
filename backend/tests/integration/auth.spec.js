const request = require('supertest');
const {app} = require('../../src/app');
// const User = require('../../src/database/models/User');
const db = require('../../src/database/models/index');

beforeAll(async () => {
  await db.sequelize.authenticate();
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

afterAll(async () => {
  await db.sequelize.close();
  console.log('Conexão com o banco de dados fechada!');
});

describe("teste se a api subiu e responde pra coffee", () => {
  it("responde 418 e mensagem I'm pot ", async () => {
    const response = await request(app).get('/coffee');
    expect(response.status).toBe(418);
    expect(response.body.response).toBe('coffee');

  })
})

describe("rota login", () => {
  it("responde 200 e body token", async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        "email": "user1@user.com",
        "password": "asdf1234"
      })
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("name");

  })
})

describe("rota login não autenticado", () => {
  it("responde 401 e Unauthorized", async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        "email": "user1@user.com",
        "password": "asdf12345"
      })
      
      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Unauthorized");

  })
})

describe("rota login com erros no body", () => {
  it("reponde 400 e \"email\" is required", async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        "emal": "e@e2.com",
        "password": "asdf123"
      })
      
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("\"email\" is required");
  })

  it("reponde 400 e \"password\" is required", async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        "email": "e@e2.com",
        "passwor": "asdf1234"
      })
      
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("\"password\" is required");
  })

  it("reponde 400 e \"email\" must be a valid email", async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        "email": "ee2.com",
        "passwor": "asdf1234"
      })
      
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("\"email\" must be a valid email");
  })
});
