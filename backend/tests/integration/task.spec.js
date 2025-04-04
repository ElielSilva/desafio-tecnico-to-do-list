const request = require('supertest');
const { app } = require('../../src/app');
// const sequelize = require('../../src/database/models/sequelize')
const db = require('../../src/database/models/index');

beforeAll(async () => {
  await db.sequelize.authenticate();
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

afterAll(async () => {
  await db.sequelize.close();
  console.log('Conexão com o banco de dados fechada!');
});

let token = '';
describe("rota task", () => {
  it("precisa mudar o status com sucesso", async () => {
    const responseToken = await request(app)
      .post('/auth/login')
      .send({
        "email": "user1@user.com",
        "password": "asdf1234"
      })
    token = responseToken.body.token;

    const responseForTrue = await request(app)
      .patch('/tasks/update/status/1')
      .set('Authorization', `Bearer ${token}`);
    expect(responseForTrue.status).toBe(200);
    expect(responseForTrue.body.message).toBe('Task status updated successfully');

    const responseForFalse = await request(app)
      .patch('/tasks/update/status/1')
      .set('Authorization', `Bearer ${token}`);
    expect(responseForFalse.status).toBe(200);
    expect(responseForFalse.body.message).toBe('Task status updated successfully');
  })

  it("CRUD uma task com sucesso", async () => {
    
    const responseCreate = await request(app)
      .post('/tasks/create')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Teste de Integração 8 com supertest',
        description: 'Este é um teste para verificar a integração supertest. 8'
      });
    expect(responseCreate.ok).toBeTruthy();
    expect(responseCreate.body.message).toBe('created with sucess');
    
    const responseFindAllTasks = await request(app)
      .get('/tasks/all')
      .set('Authorization', `Bearer ${token}`);
    
    // console.log(responseFindAllTasks.body[responseFindAllTasks.body.length - 1].id, 'aquiiiiiiiiiiiiii')

    const responseForUpdate = await request(app)
      .patch(`/tasks/update/${responseFindAllTasks.body[responseFindAllTasks.body.length - 1].id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'editado',
        description: 'editado'
      });
    // expect(responseForUpdate.status).toBe(200);
    expect(responseForUpdate.body.message).toBe('Task updated successfully');

    const responseForDelete = await request(app)
      .delete(`/tasks/delete/${responseFindAllTasks.body[responseFindAllTasks.body.length - 1].id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(responseForDelete.status).toBe(200);
    expect(responseForDelete.body.message).toBe('deleted sucess');
  })
})