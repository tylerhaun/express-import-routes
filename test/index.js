const express = require("express");
const importRoutes = require("../src");
const path = require("path");


const context = {};
before(async function() {

  const rootPath = path.join(__dirname, "routes");
  const app = express();
  app.get("/ping", function(request, response, next) {
    return response.json({pong: true});
  })
  importRoutes(app, rootPath);
  const server = app.listen();
  context.server = server;

  request = require('supertest')(server);
  context.request = request;
})


after(async () => {
  context.server.close();
});

describe("express", () => {
  it("should ping", async function() {
    const response = await context.request.get("/ping")
      .expect(200)
  })
})
describe("routes", () => {
  describe("users", () => {
    it("should succeed request", async function() {
      const response = await context.request.get("/users").expect(200);
    })
  })
  describe("payments", () => {
    it("should succeed post request", async function() {
      const response = await context.request.post("/payments").expect(200);
    })
    it("should succeed get by id request", async function() {
      const response = await context.request.get("/payments/0000000").expect(200);
    })
  })
})


