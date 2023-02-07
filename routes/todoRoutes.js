const express = require("express");
const routes = express.Router();

let data = [];
routes.post("/create", (req, res) => {
  data = req.body;
  res.send({
    status: "200",
    message: "success",
  });
});

routes.get("/get", (req, res) => {
  res.send({
    data: data,
  });
});

module.exports = routes;
