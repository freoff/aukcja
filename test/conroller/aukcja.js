var request = require('chai-http');
var chai = require('chai');
var expect = chai.expect;
var mocha = require('mocha');
var app = require('../../app/server');
var request = require('supertest');



describe('Test aukcja router',function () {


    it('get test',function (done) {
        let req = request(app);
        req.post('/aukcja/nowa').expect()
    });
});