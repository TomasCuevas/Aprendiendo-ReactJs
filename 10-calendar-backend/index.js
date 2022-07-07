const express = require("express");
const cors = require("cors");
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
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

/**
 * @routes
 */
app.use("/api/auth", require("./routes/auth/auth-routes"));
app.use("/api/events", require("./routes/events/events-routes"));

/**
 * @iniciarServidor
 */
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
