const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { authRouters, userRouters, taskRouters } = require('./routers/routers.js');
const httpErrorMiddleware = require('./middlewares/http.error.middleware.js');


const app = express();


app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/coffee', (req, res) => {
  res.status(418).json({ response: "coffee" });
});

app.use('/auth', authRouters);
app.use('/users', userRouters);
app.use('/tasks', taskRouters);

app.use(httpErrorMiddleware);


const PORT = process.env.PORT || 3001;

console.log(PORT)

module.exports = { app };