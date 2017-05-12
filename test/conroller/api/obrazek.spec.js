const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;
const should = require('chai').should();
const chaihttp = require('chai-http');
const chai = require('chai');
const app = require('../../../app/server');
const mongo = require('mongodb').MongoClient;
const id = require('shortid');


describe('Test api obrazek', function () {
  chai.use(chaihttp);
  let pathToFile = path.resolve(path.join(__dirname, '../../helper/image.jpg'));
  let fstat = fs.lstatSync(pathToFile);
  let AUKCJA_ID =
    before(function (done) {
      AUKCJA_ID = id.generate();
      mongo.connect('mongodb://127.0.0.1:22222/aukcja');
      mongo.collection('NowaAukcja').insertOne({
        aukcjaId: AUKCJA_ID,
        obrazki: []
      }, function (err, data) {
        done(err);
      });
    });


  it('Test put to new aukcja ', function (done) {
    chai.request(app).put('/api/obrazek/nowaAukcja/12345')
      .attach('plik', pathToFile, 'filename')
      .field('aukcjaId', AUKCJA_ID)
      .end(function (err, res) {
        if (err) done(err);
        
        done();
      });

  });
  it('request return 412 Precondition Failed if file was not send', function () {
    chai.request(app).put('/api/obrazek/nowaAukcja/12345').end(function (err, res) {
      if (err) done();

    });
  });
});