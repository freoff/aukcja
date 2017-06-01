const mocha = require('mocha');
const expect = require('chai').expect;
const config = require('./../../app/config/config').Config
const aws = require('aws-sdk');

describe(' config file', function () {

    it('are const variable aviable', function () {
        expect(config.SIZE_1MB).is.equal(1024 * 1024);
        expect(config.SIZE_10MB).is.equal(config.SIZE_1MB * 10);
    });
    it('expect that region is set and credential are loaded', function (done) {
        config.GETS3().then(s3 => {
            expect(s3).not.null;
            expect(s3.config.credentials.accessKeyId).is.equal("AKIAILJJIJ5TVI75RAGA");
            done();
        });
    });
    it('test if can list bucket object', function (done) {
        config.GETS3().then(s3 => {
            s3.listObjects({Bucket: config.BUCKET}, function (err, data) {
                if (err) done(err);
                else {
                    expect(data.Contents.length > 0).is.true;
                    done();
                }
            });
        });
    });
});