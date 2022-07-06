const { request, response } = require("express");

const loginUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const createUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "register",
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
