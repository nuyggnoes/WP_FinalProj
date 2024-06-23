let express = require("express");
const session = require("express-session");
const User = require("../models/userModel");
let router = express.Router();

// 로그인 페이지
router.get("/login", function (req, res) {
  res.render("login", { session: req.session });
});

// 회원가입 페이지
router.get("/register", function (req, res) {
  console.log("register get");
  res.render("register", { session: req.session });
});

// 로그인 처리
router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findUserByUsername(username);
    if (!user || password !== user.password) {
      return res.status(400).render("login", {
        errorMessage: "아이디 혹은 비밀번호가 일치하지 않습니다.",
        username: username,
        session: req.session,
      });
    }
    req.session.user = user;
    console.log("login success");
    res.redirect("/");
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    res.status(500).render("login", { errorMessage: "서버 오류가 발생했습니다." });
  }
});

// 회원가입 처리
router.post("/register", async function (req, res) {
  const { username, password, person_name, address, phone } = req.body;
  console.log(username, password, person_name, address, phone);
  try {
    const user = await User.findUserByUsername(username);
    if (user) {
      return res.status(400).render("register", { errorMessage: "이미 존재하는 아이디입니다." });
    }
    console.log("register success");
    User.createUser(username, password, person_name, address, phone);
    res.redirect("/auth/login");
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    res.status(500).render("login", { errorMessage: "서버 오류가 발생했습니다." });
  }
});

// 로그아웃 처리
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/mypage");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

module.exports = router;
