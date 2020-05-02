const mongoose = require("mongoose");

const CancionSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
  },
  album: {
    type: String,
    require: true,
    trim: true,
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
  artista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artista",
  },
});

module.exports = mongoose.model("Cancion", CancionSchema);
