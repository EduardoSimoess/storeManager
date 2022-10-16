// const salesModel = require('../models/sales.model');
const salesProductModel = require('../models/sales.product.model');
// const { validadeSale } = require('./validations/validationInpits');
// const productsModel = require('../models/product.model');

// const noCorrespondingId = {
//   type: 'PRODUCT_NOT_FOUND',
//   message: 'Product not found',
// };
// const createSail = async (products) => {
//   const saleId = await salesModel.insert();
//   const newSale = { id: saleId, itemsSold: products };
//   let validation = { type: null, message: newSale };
//   const productList = await productsModel.findAll();
//   const lastid = productList[productList.length - 1].id;
//   products.forEach((product) => {
//     const validationResults = validadeSale(product);
//     const { productId, quantity } = product;
//     if (validationResults.type) validation = validationResults;
//     if (productId < 1 || productId > lastid) validation = noCorrespondingId;
//     salesProductModel.insert({
//       saleId,
//       productId,
//       quantity,
//     });
//   });
//   return validation;
// };

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
  // createSail,
  findAll,
  findById,
};