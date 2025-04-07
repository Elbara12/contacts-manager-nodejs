const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

function configureMiddlewares(app) {
  app.use(express.static(path.resolve(__dirname, "../public")));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = configureMiddlewares;
