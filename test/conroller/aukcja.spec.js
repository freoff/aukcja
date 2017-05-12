const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;
const should = require('chai').should();
const chaihttp = require('chai-http');
const chai = require('chai');
const app = require('../../app/server');

describe('Test aukcja/nowa controler', function () {
  chai.use(chaihttp);

  it('on GET schould create document in collection NowaAukcja', function (done) {

    setTimeout(() => {
      let documentInDB = app.locals.db.collection('NowaAukcja').count().then(count => {
        chai.request(app).get('/aukcja/nowa').end(function (err, res) {
          expect(res, 'Strona nie osiagalne, server is running??').have.to.status(200);
          expect(app.locals.db, 'db connection not set').have.to.exist;
          app.locals.db.collection('NowaAukcja').count().then(result => {
            // console.log(`result:${result}, count:${count}`);
            expect(result).is.greaterThan(count);
            done();
          });

        });
      });


    }, 1000);



  });

});

/*

 


*/