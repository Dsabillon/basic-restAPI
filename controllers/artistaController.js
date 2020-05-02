const Artista = require("../models/Artista");
const { validationResult } = require("express-validator");

//----- CREAR ARTISTA -----//
exports.crearArtista = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //Creando un nuevo artista
    const artista = new Artista(req.body);
    artista.save();
    res.json(artista);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

//----- OBTENER ARTISTAS -----//
exports.obtenerArtista = async (req, res) => {
  try {
    const artistas = await Artista.find({});
    res.json(artistas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

//----- ACTUALIZAR ARTISTA -----//
exports.actualizarArtista = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre } = req.body;
  const nuevoArtista = {};

  //Construyendo nuevo artista
  if (nombre) {
    nuevoArtista.nombre = nombre;
  }

  try {
    let artista = await Artista.findById(req.params.id);

    //Si el artista no existe
    if (!artista) {
      return res.status(404).json({ mag: "Artista no encontrado" });
    }

    //Actualizar
    artista = await Artista.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoArtista },
      { new: true }
    );

    res.json({ artista });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

//----- ELIMINAR ARTISTA -----//
exports.eliminarArtista = async (req, res) => {
  try {
    let artista = await Artista.findById(req.params.id);

    //Si el artist existe
    if (!artista) {
      return res.status(404).json({ msg: "Artista no encontrado" });
    }
    await Artista.findByIdAndRemove({ _id: req.params.id });
    res.json({ msg: "Proyecto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
