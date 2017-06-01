/**
 * Created by freo on 23.05.17.
 */

const chai = require('chai');
const chaihttp = require('chai-http');
const should = chai.should();
const app = require('../../../app/server');

describe('Api aukcja', function () {
    let AUKCJAID = 12345678;
    let IMAGEID = 1234;
    let FILEPATH =
        chai.use(chaihttp);
    it('schould endpoint exites', function (done) {
        let request = chai.request(app);
        let onend = function (err, res) {
            done(err);
        };

        request.get('/api/aukcja/').end(onend);
        request.get('/api/aukcja/AUKCJAD').end(onend);

    });

});
