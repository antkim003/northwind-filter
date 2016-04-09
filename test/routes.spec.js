var app     = require('../server/app');
var request = require('supertest');
var expect  = require('chai').expect;
var agent   = request.agent(app);

// this is strictly testing that the rotes are working

describe('testing root routes', function () {
  it('/ home route is working', function (done) {
    agent
      .get('/')
      .expect(200)
      .end(done);
  });

  it('/products route is working', function (done) {
    agent
      .get('/products')
      .expect(200)
      .end(done);
  });

  it('/employees route is working', function (done) {
    agent
      .get('/employees')
      .expect(200)
      .end(done);
  });
});

// testing api routes here

describe('testing api routes', function () {
  it('/api route is working', function (done) {
    agent
      .get('/api')
      .expect(200)
      .end(done);
  });

  it('/api/products/a route to have results greater than 3', function (done) {
    agent
      .get('/api/products/a')
      .expect(200)
      .expect(function(res) {
        expect(res.body.length).to.be.above(3)
      })
      .end(done);
  });

  it('/api/employees/c route to have results greater than 3', function (done) {
    agent
      .get('/api/employees/c')
      .expect(200)
      .expect(function(res) {
        expect(res.body.length).to.be.above(3);
      })
      .end(done);
  });
  

});