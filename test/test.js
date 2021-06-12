var request = require('supertest');
var app = require('../index.js')
describe('GET /', function () {
    it('displays "Title Hello World 2!"', function (done) {
        // The line below is the core test of our app.
        // Change this content for proofs
        request(app).get('/').expect('Hello World 2!', done);
    });
});
