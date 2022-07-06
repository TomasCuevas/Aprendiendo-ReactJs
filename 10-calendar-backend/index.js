const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use("/api/auth", require("./routes/auth/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
