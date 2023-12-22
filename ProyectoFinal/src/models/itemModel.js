const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
    
    const mapsRows = rows.map(row => ({
      product_id: row.product_id,
      product_name: row.product_name,
      product_description: row.product_description,
      price: parseFloat(row.price),
      stock: row.stock,
      discount: row.discount,
      sku: row.sku,
      dues: row.dues,
      image_front: row.image_front,
      image_back: row.image_back,
      create_time: row.create_time,
      licence_id: row.licence_id,
      category_id: row.category_id,
      category_name: row.category_name,
      licence_name: row.licence_name
    }));
    
    const response = {
      isError: false,
      data: mapsRows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const getItem = async (params) => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
    
    const mapsRows = rows.map(row => ({
      product_id: row.product_id,
      product_name: row.product_name,
      product_description: row.product_description,
      price: parseFloat(row.price),
      stock: row.stock,
      discount: row.discount,
      sku: row.sku,
      dues: row.dues,
      image_front: row.image_front,
      image_back: row.image_back,
      create_time: row.create_time,
      licence_id: row.licence_id,
      category_id: row.category_id,
      category_name: row.category_name,
      licence_name: row.licence_name
    }));
    
    const response = {
      isError: false,
      data: mapsRows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const createItem = async (params) => {
  try {
    const [rows] = conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);

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

const editItem = async (params, id) => {
  try {
    const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
    const response = {
      isError: false,
      message: `El item fue modificado exitosamente.`,
      status: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos modificar el item seleccionado, error: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const deleteItem = async (params) => {
  try {
    const [rows] = await conn.query('DELETE FROM product WHERE product_id=?;', params.product_id);
    const response = {
      isError: false,
      data: rows,
      message: `Item borrado exitosamente.`
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos insertar los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

module.exports = {
  getAll,
  getItem,
  createItem,
  editItem,
  deleteItem
};
