const { expect } = require('chai');

const sinon = require('sinon');

const salesProductModel = require('../../../src/models/sales.product.model');

const connection = require('../../../src/models/connection');

const { salesList } = require('./Mocks/sales.models.mock');

describe('Testes unitários relacionados à busca de vendas', function () {
  it('Recuperando a lista de vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesList]);
    const results = await salesProductModel.findAll();
    expect(results).to.be.deep.equal(salesList);
  });
});