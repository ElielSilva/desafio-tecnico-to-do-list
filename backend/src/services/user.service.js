const db = require('../database/models/index.js');
const HttpException = require('../utils/HttpException.js');

const UserService = {

  findUserById: async (RequestBody) => {
    const existingUser = await db.findOne({ where: { id: RequestBody.userId } });
    if (!existingUser) {
      throw new HttpException(404, 'User not found');
    }

    const { name, email } = existingUser;

    return { name, email };
  }
  
}

module.exports = UserService;
