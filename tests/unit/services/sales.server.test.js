const { expect } = require('chai');

const sinon = require('sinon');

const salesService = require('../../../src/services/sales.service');

const salesProductModel = require('../../../src/models/sales.product.model');

// const { findAll } = salesProductModel;

const { salesList } = require('./Mocks/sales.service.mock');

describe('Verificando o service das vendas', function () {
  describe('listagem de vendas', function () {
    it('retorna a listagem de produtos completa', async function () {
      sinon.stub(salesProductModel, 'findAll').resolves(salesList);
      const results = await salesService.findAll();
      expect(results).to.be.deep.equal(salesList);
    });
  });
});
