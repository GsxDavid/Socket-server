const mongoose = require("mongoose");

async function connectToDatabase(uri) {
	try {
		await mongoose.connect(uri, {
			serverSelectionTimeoutMS: 4000,
		});
		return "Conexión establecida"; // Devuelve un mensaje en caso de éxito
	} catch (error) {
		throw new Error("Error al conectar con la base de datos: " + error.message); // Lanza un error si la conexión falla
	}
}

// Manejar eventos de conexión
/* mongoose.connection.on("connected", () => {
	console.log("Mongoose conectado a MongoDB");
});

mongoose.connection.on("error", err => {
	console.error("Error de conexión en Mongoose:", err);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose desconectado de MongoDB");
}); */

module.exports = { connectToDatabase };
