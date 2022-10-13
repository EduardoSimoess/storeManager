const { expect } = require('chai');
const sinon = require('sinon');

// const productService = require('../../../src/services/product.service');

const productModel = require('../../../src/models/product.model');

const { allProducts } = require('./Mocks/product.service.mocks');

describe('Verificando service dos produtos', function () {
  describe('listagem de produtos', function () {
    it('retorna a listagem completa de produtos', async function () {
      sinon.stub(productModel, 'findAll').resolves(allProducts);

      const result = await productModel.findAll();

      expect(result).to.be.deep.equal(allProducts);
    });
  });
});