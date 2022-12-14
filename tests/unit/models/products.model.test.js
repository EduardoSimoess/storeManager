const { expect } = require('chai');

const sinon = require('sinon');

const productModel = require('../../../src/models/product.model');

const connection = require('../../../src/models/connection');

const { productList } = require('./Mocks/product.model.mocks');

describe('Testes unitários para a busca de produtos', function () {
  afterEach(sinon.restore);
  
  it('Recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productList]);
    const results = await productModel.findAll();
    expect(results).to.be.deep.equal(productList);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[productList[0]]]);
    const result = await productModel.findById(1);
    expect(result).to.be.deep.equal(productList[0]);
  });
});