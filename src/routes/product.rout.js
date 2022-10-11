const express = require('express');

const router = express.Router();

const productControler = require('../controllers/product.controller');

router.get('/', productControler.listProducts);

router.get('/:id', productControler.listProductsById);

module.exports = router;