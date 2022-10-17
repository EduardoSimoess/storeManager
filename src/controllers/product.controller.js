const productService = require('../services/product.service');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  // const {
    // type,
    // message } = await productService.findAll();
  const message = await productService.findAll();

  res.status(200).json(message);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productService.findById(id);
  
  if (type) return res.status(errorMap(type)).json({ message });
  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.createProduct(name);
  if (type) return res.status(errorMap(type)).json({ message });
  res.status(201).json(message);
};

const updateData = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productService.updateData(id, name);
  if (type) return res.status(errorMap(type)).json({ message });
  res.status(200).json(message);
};
module.exports = {
  listProducts,
  listProductsById,
  createProduct,
  updateData,
};