let express = require("express");
let app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index1");
});

app.listen(3000);
console.log("Server is listening on port 3000");
