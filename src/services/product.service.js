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

const createProduct = async (name) => {
  if (!name) {
 return {
    type: 'NAME_NOT_INSERTED',
    message: '"name" is required',
  }; 
  }
  
  if (name.length < 5) {
    return {
      type: 'MIN_LENGTH',
      message: '"name" length must be at least 5 characters long',
    };
  }

  const newProductId = await productModel.insert({ name });
  const newProduct = await productModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const updateData = async (id, name) => {
  const product = await productModel.findById(id);
  if (!product || product.length === 0) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  if (!name) {
    return {
      type: 'NAME_NOT_INSERTED',
      message: '"name" is required',
    };
  }

  if (name.length < 5) {
    return {
      type: 'MIN_LENGTH',
      message: '"name" length must be at least 5 characters long',
    };
  }
  const update = await productModel.updateData(id, name);

  return { type: null, message: update };
};
module.exports = {
  findAll,
  findById,
  createProduct,
  updateData,
};