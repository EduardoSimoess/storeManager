const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../src/services/product.service');

const productModel = require('../../../src/models/product.model');

const { allProducts } = require('./Mocks/product.service.mocks');

describe('Verificando service dos produtos', function () {
  describe('listagem de produtos', function () {
    it('retorna a listagem completa de produtos', async function () {
      sinon.stub(productModel, 'findAll').resolves(allProducts);
      const result = await productModel.findAll();
      expect(result).to.be.deep.equal(allProducts);
    });

    it('retorna um erro caso o produto não exista', async function () {
      sinon.stub(productModel, 'findById').resolves(undefined);

      const result = await productService.findById(8);
      console.log(result);
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      
      expect(result.message).to.equal('Product not found');
    });

    it('retorna a pessoa passageira caso ID existente', async function () {
      sinon.stub(productModel, 'findById').resolves(allProducts[0]);

      const result = await productService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
  });