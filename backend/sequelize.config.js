const path = require('path');

module.exports = {
  'config': path.resolve(__dirname,'src','database','config', 'database.js'),
  'models-path': path.resolve(__dirname,'src','database','models'),
  'seeders-path': path.resolve(__dirname,'src','database', 'seeders'),
  'migrations-path': path.resolve(__dirname,'src','database', 'migrations'),
};