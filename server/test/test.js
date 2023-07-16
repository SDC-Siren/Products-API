const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
let expect = chai.expect;
console.log(global.Promise);

describe('GET products', () => {
  it('should send first 5 products', (done) => {
    return chai.request('http://localhost:3000')
      .get('/products')
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('array');
        expect(response.body).to.have.lengthOf(5);
        done();
      });
  });

  it('should send 3 products from page 2', (done) => {
    return chai.request('http://localhost:3000')
      .get('/products')
      .query({page: 2, count: 3})
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('array');
        expect(response.body).to.have.lengthOf(3);
        expect(response.body[0].id).to.equal(4);
        done();
      });
  });

  it('should send empty array if requested page outside of database', (done) => {
    return chai.request('http://localhost:3000')
      .get('/products')
      .query({page: 2342, count: 25432})
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('array');
        expect(response.body).to.have.lengthOf(0);
        done();
      });
  });

});

describe('GET product details', () => {
  it('should return single product with features', (done) => {
    let product_id = 905434;
    return chai.request('http://localhost:3000')
      .get(`/products/${product_id}`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('object');
        expect(response.body.id).to.equal(product_id);
        done();
      });
  });

  it('should respond if product does not exist in database', (done) => {
    let product_id = 403514878;
    chai.request('http://localhost:3000')
      .get(`/products/${product_id}`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(404);
        expect(response.text).to.be.a('string');
        expect(response.text).to.equal('This product does not exist.');
        done();
      });
  });

});

describe('GET product styles', () => {
  it('should return all styles for a given product', (done) => {
    let product_id = 40350;
    chai.request('http://localhost:3000')
      .get(`/products/${product_id}/styles`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body.results).to.be.an('array');
        expect(response.body.product_id).to.equal(product_id);
        done();
      });
  });

  it('should return empty styles array for non existent product', (done) => {
    let product_id = 403514878;
    chai.request('http://localhost:3000')
      .get(`/products/${product_id}/styles`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body.results).to.be.an('array');
        expect(response.body.results).to.have.lengthOf(0);
        expect(response.body.product_id).to.equal(product_id);
        done();
      });
  });
});

describe('GET related products', () => {
  it('should return all related product ids for a given product', (done) => {
    let product_id = 40350;
    chai.request('http://localhost:3000')
      .get(`/products/${product_id}/styles`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('array');
        done();
      });
  });

  it('should return an empty array for nonexistent product', (done) => {
    let product_id = 403514878;
    chai.request('http://localhost:3000')
      .get(`/products/${product_id}/styles`)
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.lengthOf(0);
        done();
      });
  });

});