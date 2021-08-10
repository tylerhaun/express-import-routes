const express = require("express");
const importRoutes = require("../src");
const path = require("path");


const context = {};
before(async function() {
  console.log("before()");

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
  console.log("after()");
  context.server.close();
});

describe("express", () => {
  it("should ping", async function() {
    const response = await context.request.get("/ping")
      .expect(200)
  })
})
describe("import users route", () => {
  it("should succeed request", async function() {
    const response = await context.request.get("/users").expect(200);
  })
})


