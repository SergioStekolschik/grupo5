const bcrypt = require('bcrypt')
const UserModel = require('../models/userModel');

const createUser = async (user) => {
  const userSchema = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: bcrypt.hashSync(user.password, 10)
  }
  return await UserModel.createUser([Object.values(userSchema)]);
}

const getUserByEmail  = async (email) => {
  return await UserModel.getUserByEmail(email);
}

module.exports = {
  createUser,
  getUserByEmail 
}
