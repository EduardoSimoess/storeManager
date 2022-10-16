const Joi = require('joi');
// const productsModel = require('../../models/product.model');

const addSaleSchema = Joi.object({
  productId: Joi.number().integer().min(1).max(),
  quantity: Joi.number().integer().min(1),
});

module.exports = {
  addSaleSchema,
};