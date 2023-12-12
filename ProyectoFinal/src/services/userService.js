const UserModel = require('../models/userModel');

const createUser = async (user) => {
  const userSchema = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password
  }
  return await UserModel.createUser([Object.values(userSchema)]);
}

module.exports = {
  createUser
}
