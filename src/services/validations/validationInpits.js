// const { addSaleSchema } = require('./schemas');

// const validadeSale = (product) => {
//   const { error } = addSaleSchema.validate(product);
//   // console.log(error.message);
//   if (product.quantity === undefined) {
//  return {
//    type: 'NOT_INSERTED',
//    message: '"quantity" is required',
//  };
//   }
//   if (product.productId === undefined) {
// return { type: 'NOT_INSERTED',
//   message: '"productId" is required',
// };
//   }
//   if (error) {
//  return {
//     type: 'MIN_VALUE', message: error.message,
//   }; 
// }
//   return { type: null, message: '' };
// };

// module.exports = {
//   validadeSale,
// };