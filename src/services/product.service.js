const productModel = require('../models/product.model');

const findAll = async () => {
  const products = await productModel.findAll();

  return products;
};

const findById = async (id) => {
  const products = await productModel.findById(id);
  if (products) return { type: null, message: products };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};