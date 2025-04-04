const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET;

const TokenService = {
  hashPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },

  comparePasswords: async (password, hash) => {
    return await bcrypt.compare(password, hash);
  },

  generateToken: (userId, email) => {
    return jwt.sign({ id: userId, email }, JWT_SECRET, { expiresIn: '12h' });
  },

  verifyToken: (token) => {
    return jwt.verify(token, JWT_SECRET);
  }
};

module.exports = TokenService;
