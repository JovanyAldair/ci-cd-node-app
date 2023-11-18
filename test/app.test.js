/*
This file contains the tests of the GET/ routes
You can update this this file using chai assertions if you want
It expects 200 OK
*/

const request = require('supertest')
const app = require('../app')

//testing GET route /
describe("GET /", () => {
  it("responds with a json message", function(done) {
    request(app)
      .get("/")
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});

//testing GET route /download
describe("GET /download", () => {
  it("responds with a file download", function(done) {
    request(app)
      .get("/download")
      .expect('Content-Type', 'application/pdf')
      .expect(200, done)
  });
});
