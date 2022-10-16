const express = require('express');

const router = express.Router();

const salesController = require('../controllers/sales.controller');

router.get('/', salesController.listSalesProducts);

router.get('/:id', salesController.listSalesProductsById);

module.exports = router;
