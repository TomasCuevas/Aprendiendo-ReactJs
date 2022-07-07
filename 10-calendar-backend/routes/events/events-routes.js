/**
 * Rutas de Eventos
 * host: /api/events
 */
const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

/**
 * @helpers
 */
const isDate = require("../../helpers/isDate");

/**
 * @middleware
 */
const { fieldsValidation } = require("../../middleware/fieldsValidation");
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
router.use(JWTValidation);

router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "El titulo es requerido.").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria.").custom(isDate),
    check("end", "La fecha de finalizacion es obligatoria.").custom(isDate),
    fieldsValidation,
  ],
  createEvent
);

router.put(
  "/:id",
  [
    check("title", "El titulo es requerido.").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria.").custom(isDate),
    check("end", "La fecha de finalizacion es obligatoria.").custom(isDate),
    fieldsValidation,
  ],
  updateEvent
);

router.delete("/:id", [JWTValidation], deleteEvent);

module.exports = router;
