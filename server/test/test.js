const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest');
// const app = require('../index.js');

chai.use(chaiHttp);
let expect = chai.expect;

describe('GET products', () => {
  it('should send first 5 products', () => {
    chai.request('http://localhost:3000')
      .get('/products')
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('array');
        expect(response.body).to.have.lengthOf(5);
      });
  });

  it('should send 3 products from page 2', () => {
    chai.request('http://localhost:3000')
      .get('/products')
      .query({page: 2, count: 3})
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('array');
        expect(response.body).to.have.lengthOf(3);
        expect(response.body[0].id).to.equal(4);
      });
  });

  it('should send empty array if requested page outside of database', () => {
    chai.request('http://localhost:3000')
      .get('/products')
      .query({page: 2342, count: 25432})
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('array');
        expect(response.body).to.have.lengthOf(0);
      });
  });

});

describe('GET product details', () => {
  it('should return single product with features', () => {
    let product_id = 905434;
    chai.request('http://localhost:3000')
      .get(`/products/${905434}`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('object');
        expect(response.body.id).to.equal(product_id);
      });
  });

  it('should respond if product does not exist in database', () => {
    let product_id = 403514878;
    chai.request('http://localhost:3000')
      .get(`/products/${403514878}`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(404);
        expect(response.body).to.be.a('string');
        expect(response.body.message).to.equal('This product does not exist.');
      })
  });

});