const salesProductModel = require('../models/sales.product.model');

const findAll = async () => {
  const salesProducts = await salesProductModel.findAll();
  return salesProducts;
};

const findById = async (id) => {
    const products = await salesProductModel.findById(id);
    if (products && products.length !== 0) return { type: null, message: products };
    return {
      type: 'PRODUCT_NOT_FOUND',
      message: 'Sale not found',
    };
};

module.exports = {
  findAll,
  findById,
};