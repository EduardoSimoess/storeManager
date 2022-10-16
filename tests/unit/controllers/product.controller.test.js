const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productService = require('../../../src/services/product.service');
const productController = require('../../../src/controllers/product.controller');

const { allProducts } = require('./Mocks/products.controller.mock');

describe('Verificando o controller dos products', function () {
  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    const productList = [allProducts];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'findAll').resolves(allProducts);

    await productController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('Buscando um produto', async function () {
    const res = {};
    const req = {
      params: {
        id: 1
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'findById')
      .resolves({
        type: null,
        message: allProducts[0]
      });

    await productController.listProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts[0]);
  });
});