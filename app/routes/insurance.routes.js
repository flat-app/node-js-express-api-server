module.exports = app => {
  const insurance = require("../controllers/insurance.controller.js");

  var router = require("express").Router();

  router.post("/", insurance.create);

  app.use("/api/insurance", router); // route for api call 

};
