var express = require("express");
var app = express();
const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const dbPath = path.join(__dirname, "database.sqlite");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

// let comments = []; // 빈 db... 껐다 켜면 사라지죠?
const Comments = sequelize.define("Comments", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/", function (req, res) {
//   res.render("index3", { comments: comments });
// }); // 루트 페이지에 index3.ejs 파일을 render 시키겠다!
app.get("/", async function (req, res) {
  // 데이터베이스에서 모든 댓글을 가져옵니다.
  const comments = await Comments.findAll();
  res.render("index3", { comments: comments });
});

app.post("/create", async function (req, res) {
  const { content } = req.body;
  // 데이터베이스에 새로운 댓글을 추가합니다.
  await Comments.create({ content });
  res.redirect("/");
});

// app.listen(3000);
// console.log("Server is listening on port 3000");
(async () => {
  await sequelize.sync({ force: true }); // 개발 단계에서는 { force: true } 옵션으로 테이블을 매번 초기화
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
})();
