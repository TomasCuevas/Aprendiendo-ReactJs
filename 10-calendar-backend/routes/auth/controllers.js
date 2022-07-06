const { request, response } = require("express");

const loginUser = (req = request, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const refreshToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "refresh",
  });
};

module.exports = {
  createUser,
  loginUser,
  refreshToken,
};
