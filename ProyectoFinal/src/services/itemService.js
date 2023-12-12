const ItemModel = require('../models/itemModel');

const getAllItems = async () => {
  return await ItemModel.getAll();
}

const getItem = async (id) => {
  return await ItemModel.getItem({product_id: id});
}

const createItem = async (item) => {
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: item.image_front,
    image_back: item.image_back,
    licence_id: item.collection,
    category_id: item.category
  }

  return await ItemModel.createItem([Object.values(itemSchema)]);
}

const editItem = async (item, id) => {
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: item.image_front,
    image_back: item.image_back,
    licence_id: item.collection,
    category_id: item.category
  }

  return await ItemModel.editItem(itemSchema, {product_id: id});
}


const deleteItem = async (id) => {
  return await ItemModel.deleteItem({product_id: id});
}

module.exports = {
  getAllItems,
  getItem,
  createItem,
  editItem,
  deleteItem
}
