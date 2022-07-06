const express = require("express");
require("dotenv").config();

const { dbConnection } = require("./database/config");

const app = express();

/**
 * @database
 */
dbConnection();

/**
 * @middlewares
 */
app.use(express.static("public"));
app.use(express.json());

/**
 * @routes
 */
app.use("/api/auth", require("./routes/auth/auth"));

/**
 * @iniciarServidor
 */
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
