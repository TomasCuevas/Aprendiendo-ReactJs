const { request, response } = require("express");

/**
 * @models
 */
const User = require("../../database/models/UserModel");

const loginUser = (req = request, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const createUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El email ya ha sido utilizado.",
      });
    }

    user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      msg: "register",
      uid: user._id,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "Contacte a un administrador.",
    });
  }
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
