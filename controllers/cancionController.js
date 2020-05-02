const Cancion = require("../models/Cancion");
const Artista = require("../models/Artista");
const { validationResult } = require("express-validator");

exports.crearCancion = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  try {
    //Extraer artista
    const { artista } = req.body;
    console.log(artista);

    const existeArtista = await Artista.findById({ artista });
    if (!existeArtista) {
      return res.status(404).json({ msg: "Artista no encontrado" });
    }

    //Crear la canción
    // const cancion = new Cancion(req.body);
    // await cancion.save();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error" });
  }
};
