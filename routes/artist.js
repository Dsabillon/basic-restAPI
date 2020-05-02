const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const artistaController = require("../controllers/artistaController");

router.post(
  "/",
  [check("nombre", "El nombre es obligatorio").not().isEmpty()],
  artistaController.crearArtista
);

router.get("/", artistaController.obtenerArtista);

router.put(
  "/:id",
  [check("nombre", "El nombre del artista es obligatorio").not().isEmpty()],
  artistaController.actualizarArtista
);

router.delete("/:id", artistaController.eliminarArtista);

module.exports = router;
