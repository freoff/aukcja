/**
 * Created by freo on 02.05.17.
 */
var expect = require('chai').expect;
var should = require('chai').should();
var mocha = require('mocha');
var chaihttp = require('chai-http');

var chai = require('chai');
var app = require('./../../app/server');

describe('Test routes', function () {
    chai.use(chaihttp);
    let request = chai.request(app);
    it('bad url return 404 and response from express',function(done) {
        request.get('/dontExist').end(function(err,res) {
            res.status.should.be.equal(404);
            res.should.have.header('x-powered-by','Express');
            done();
        })
    })
    it('is api/aukcja ', function (done) {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done(err);
            });
    });
    it('GET /aukcja/nowa is aviailable', function (done) {
        request.get('/aukcja/nowa/').end(function (err, res) {
            res.status.should.be.equal(200);
            done(err);
        });
    });
    it('POST /aukcja/nowa is aviailable', function (done) {
        request.post('/aukcja/nowa/').end(function (err, res) {

            done(err);
        });
    });

});