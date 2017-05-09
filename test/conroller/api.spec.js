var expect = require('chai').expect;
var should = require('chai').should();
var mocha = require('mocha');
var chaihttp = require('chai-http');

var chai = require('chai');
var app = require('./../../app/server');


describe('Test api endpoint', function () {
  chai.use(chaihttp);
  it('is api/obrazek is aviable', function (done) {
    chai.request(app).get('/api/obrazek')
      
      .end(function (err, res) {
        res.status.should.eq(200);
        done(err);
      });
  });
  it('this dont exist', function (done){
    chai.request(app).get('/nonexising/path')
      .end(function (err,res){
        expect(res.status).is.eq(404);
        done();
      });
  })
});