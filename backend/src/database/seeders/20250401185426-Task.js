'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [{
      "id": 1,
      "title": "Teste de Integração 1",
      "description": "Este é um teste para verificar a integração da API de tarefas. 1",
      "completed": false,
      "userId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2,
      "title": "Teste de Integração 2",
      "description": "Este é um teste para verificar a integração da API de tarefas. 2",
      "completed": false,
      "userId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 3,
      "title": "Teste de Integração 3",
      "description": "Este é um teste para verificar a integração da API de tarefas. 3",
      "completed": false,
      "userId": 2,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 4,
      "title": "Teste de Integração API 4",
      "description": "Este é um teste para verificar a integração da API de tarefas. 4",
      "completed": false,
      "userId": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 5,
      "title": "Teste de Integração API 5",
      "description": "Este é um teste para verificar a integração da API de tarefas. 5",
      "completed": false,
      "userId": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 6,
      "title": "Teste de Integração API 6",
      "description": "Este é um teste para verificar a integração da API de tarefas. 6",
      "completed": false,
      "userId": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 7,
      "title": "Teste de Integração API 7",
      "description": "Este é um teste para verificar a integração da API de tarefas. 7",
      "completed": false,
      "userId": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('tasks', null, {});
    
  }
};
