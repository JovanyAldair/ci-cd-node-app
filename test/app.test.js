/*
Test the GET/ routes
*/

const request = require('supertest');
const app = require('../app'); // the express server

describe("GET /", () => {
  it("responds with a json message", function(done) {
    request(app)
      .get("/")
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe("GET /download", () => {
  it("responds with a file download", function(done) {
    request(app)
      .get("/download")
      .expect('Content-Type', 'application/pdf')
      .expect(200, done);
  });
});
