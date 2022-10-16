const saleService = require('../services/sales.service');
const errorMap = require('../utils/errorMap');

// const newSale = async (req, res) => {
//   const sale = req.body;

//   const { type, message } = await saleService.createSail(sale);
//   if (type) {
//  return res.status(errorMap(type)).json({
//     message,
//   }); 
// }
//   res.status(201).json(message);
// };

const listSalesProducts = async (_req, res) => {
  const salesProducts = await saleService.findAll();

  res.status(200).json(salesProducts);
};

const listSalesProductsById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await saleService.findById(id);

  if (type) return res.status(errorMap(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  // newSale,
  listSalesProducts,
  listSalesProductsById,
};