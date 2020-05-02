const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const cancionController = require("../controllers/cancionController");

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("album", "El album es obligatorio").not().isEmpty(),
  ],
  cancionController.crearCancion
);

module.exports = router;
