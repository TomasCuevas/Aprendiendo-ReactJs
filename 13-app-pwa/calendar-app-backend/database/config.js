const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos CORRECTAMENTE.");
  } catch (err) {
    console.log(err);
    throw new Error("Error a la hora de inicializar DB.");
  }
};

module.exports = {
  dbConnection,
};
