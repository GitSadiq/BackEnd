let array = [];

module.exports.toDoCreate = (req, res) => {
  data = req.body;
  array.push(data);
  res.send({
    status: "200",
    message: "success",
  });
};

module.exports.toDoGet = (req, res) => {
  res.send(array);
};

module.exports.toDoEdit = (req, res) => {
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
};

module.exports.toDoUpdate = (req, res) => {
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
};

module.exports.toDoDelete = (req, res) => {
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
};
