const { validationResult } = require("express-validator");
const { request, response } = require("express");

const fieldsValidation = (req = request, res = response, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.errors,
    });
  }

  next();
};

module.exports = {
  fieldsValidation,
};
