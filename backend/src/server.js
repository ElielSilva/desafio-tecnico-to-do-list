// import { App } from './app.js';
// import 'dotenv/config';

// const PORT = process.env.APP_PORT || 3001;

// new App().start(PORT);

// const PORT = process.env.PORT || 3001;
// import { startServer } from './app.js';
// const { startServer } = require('./app.js');

// startServer();

// app.listen(PORT);
// console.log(`Running on port ${PORT}`);
const {app} = require('./app')

const startServer = () => app.listen(3001, () => {
  console.log(`API running at http://localhost:${3001}`);
});

startServer();
