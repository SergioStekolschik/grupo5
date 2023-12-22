const { conn } = require('../config/conn');

const createUser = async (params) => {
  try {
    const [rows] = await conn.query('INSERT INTO user (name,lastname,email,password) VALUES ?;', [params]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const getUserByEmail = async (param) => {
  try {
    const [rows] = await conn.query('SELECT u.*,r.role_name FROM user u LEFT JOIN (user_has_role uhr INNER JOIN role r ON uhr.role_role_id = r.role_id) ON u.user_id = uhr.user_user_id WHERE email = ?;', [param]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

module.exports = {
  createUser,
  getUserByEmail
};
