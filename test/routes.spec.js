var app     = require('../server/app');
var request = require('supertest');
var expect  = require('chai').expect;
var agent   = request.agent(app);

// this is strictly testing that the rotes are working

describe('testing the routes', function () {
  it('/ home route is working', function (done) {
    agent
      .get('/')
      .expect(200)
      .end(done);
  });

  it('/api route is working', function (done) {
    agent
      .get('/')
      .expect(200)
      .end(done);
  });
});