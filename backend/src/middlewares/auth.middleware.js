const jwt = require('jsonwebtoken');
const HttpException = require('../utils/HttpException.js');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    throw new HttpException(403, 'Token is required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.userId = decoded.id;
    next();
  } catch (error) {
    throw new HttpException(401, 'Invalid or expired token');
  }
};

module.exports = authMiddleware;
