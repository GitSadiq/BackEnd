const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.listen(port, function () {
  console.log("SERVER RUN on", port);
});

// app.use("/user", function (req, res) {
//   const users = [
//     {
//       id: 1,
//       name: "sadiq",
//     },
//     {
//       id: 2,
//       name: "hasan",
//     },
//     {
//       id: 3,
//       name: "yousuf",
//     },
//   ];
//   res.send(users);
// });

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/rootroutes"));
