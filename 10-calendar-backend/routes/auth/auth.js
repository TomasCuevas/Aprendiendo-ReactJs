/**
 * Rutas de Usuarios / Auth
 * host: /api/auth
 */
const { Router } = require("express");
const router = Router();

/**
 * @controllers
 */
const { createUser, loginUser, refreshToken } = require("./controllers");

/**
 * @routes
 */
router.post("/", loginUser);

router.post("/new", createUser);

router.get("/refresh", refreshToken);

module.exports = router;
