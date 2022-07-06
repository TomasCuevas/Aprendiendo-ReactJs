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

  if (name.length < 5) {
    return res.json({
      ok: false,
      msg: "El nombre debe tener al menos 5 letras.",
    });
  }

  res.json({
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
