/**
 * Rutas de Eventos
 * host: /api/events
 */
const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

/**
 * @middleware
 */
const { JWTValidation } = require("../../middleware/JWTValidation");

/**
 * @controllers
 */
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("./events-controllers");

/**
 * @routes
 */
// router.use(JWTValidation);

router.get("/", [JWTValidation], getEvents);

router.post("/", [JWTValidation], createEvent);

router.put("/:id", [JWTValidation], updateEvent);

router.delete("/:id", [JWTValidation], deleteEvent);

module.exports = router;
