const CategoryModel = require('../models/categoryModel');

const getAllCategories = async () => {
  return await CategoryModel.getAll();
}

module.exports = {
  getAllCategories,
}