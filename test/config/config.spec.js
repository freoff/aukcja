const mocha = require('mocha');
const expect = require('chai').expect;
const config = require('./../../app/config/config').Config
const aws = require('aws-sdk');

describe('Test config file', function () {
  
  it('are const variable aviable', function () {
    expect(config.SIZE_1MB).is.equal(1024*1024);
    expect(config.SIZE_10MB).is.equal(config.SIZE_1MB*10);
  });
  it('expect that region is set and credential are loaded', function (done) {


    expect(aws.config.region).is.equal('eu-central-1');
    aws.config.getCredentials(function (err) {
      
      done(err);
    })

  })
});