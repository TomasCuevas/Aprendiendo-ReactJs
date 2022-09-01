/**
 * Rutas de Usuarios / Auth
 * host: /api/auth
 */
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

/**
 * @middlewares
 */
const { fieldsValidation } = require("../../middleware/fieldsValidation");
const { JWTValidation } = require("../../middleware/JWTValidation");

/**
 * @controllers
 */
const { createUser, loginUser, refreshToken } = require("./auth-controllers");

/**
 * @routes
 */
router.post(
  "/",
  [
    check("email", "El email es obligatorio.").isEmail(),
    check("password", "El password debe tener al menos 8 caracteres.").isLength(
      8
    ),
    fieldsValidation,
  ],
  loginUser
);

router.post(
  "/new",
  [
    check("name", "El nombre debe tener al menos 2 caracteres.").isLength(2),
    check("password", "El password debe tener al menos 8 caracteres.").isLength(
      8
    ),
    check("email", "El email es obligatorio.").isEmail(),
    fieldsValidation,
  ],
  createUser
);

router.get("/refresh", [JWTValidation], refreshToken);

module.exports = router;
