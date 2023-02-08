const express = require("express");
const routes = express.Router();
// const url = require("url");
// const delPath = "http://localhost:4000/todo/delete?id=133";
// const saveUrl = url.parse(delPath, true);
// // console.log(saveUrl.query.id);

let array = [];

routes.post("/create", (req, res) => {
  data = req.body;
  array.push(data);
  res.send({
    status: "200",
    message: "success",
  });
});

routes.get("/get", (req, res) => {
  res.send(array);
});

routes.get("/edit", (req, res) => {
  let id = req.query.id;
  let editArray = [];
  if (id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        editArray.push(array[i]);
      }
    }
  }
  res.send(editArray);
});

routes.put("/update", (req, res) => {
  const updateObj = req.body;
  if (updateObj.id) {
    array.map((item, index) => {
      if (item.id == updateObj.id) {
        array.splice(index, 1, updateObj);
      }
    });
  }
  res.send({
    status: "200",
    message: "success",
  });
});

routes.delete("/delete", (req, res) => {
  let id = req.query.id;
  let copyArray = [];
  if (id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        console.log("be", array[i]);
      } else {
        copyArray.push(array[i]);
      }
    }
    array = copyArray;
  } else {
    array = [];
  }
  res.send({
    status: "200",
    message: "success",
  });
});

module.exports = routes;
