const express = require("express");
const connectDB = require("./config/db");

//Servidor
const app = express();

//Conectar DB
connectDB();

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Probando");
});

const PORT = process.env.port || 4000;

//Routes
app.use("/api/artist", require("./routes/artist"));
//app.use("/api/songs", require("./routes/songs"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
