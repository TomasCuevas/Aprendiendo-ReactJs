const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

/**
 * @models
 */
const User = require("../../database/models/UserModel");

/**
 * @helpers
 */
const generateJWT = require("../../helpers/jwt");

const loginUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe. -email",
      });
    }

    const verifyPassword = bcryptjs.compareSync(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe. -password",
      });
    }

    const token = await generateJWT(user._id, user.name);

    res.json({
      ok: true,
      msg: "login",
      token,
      uid: user._id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Contacte a un administrador.",
    });
  }
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

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);

    await user.save();

    const token = await generateJWT(user._id, user.name);

    res.status(201).json({
      ok: true,
      msg: "register",
      token,
      uid: user._id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
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
