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


module.exports = {
  createUser
};
