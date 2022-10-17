const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/sales.service');

const salesController = require('../../../src/controllers/sales.controller');

const { allSalles } = require('./Mocks/sales.controller.mock');

describe('Verificando o controller das vendas', function () {
  it('listando as vendas', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, 'findAll').resolves(allSalles);

    await salesController.listSalesProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalles);
  });
});