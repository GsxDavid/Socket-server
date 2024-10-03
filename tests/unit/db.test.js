const mongoose = require("mongoose");
const { connectToDatabase } = require("../../config/database");

describe("Conexión a MongoDB local", () => {
	
	afterAll(async () => {
		await mongoose.disconnect();
	});

	test("Debería conectarse correctamente a la base de datos local", async () => {
		await connectToDatabase("mongodb://127.0.0.1:27017/testdb");
		const isConnected = mongoose.connection.readyState; // 1 significa que está conectado
		expect(isConnected).toBe(1);
	});

	test("Debería manejar errores de conexión", async () => {
		jest.setTimeout(10000);

		const error = await connectToDatabase("mongodb://invalid-uri").catch(err => err);

		expect(error).toBeInstanceOf(Error);
		expect(error.message).toMatch(/Error al conectar con la base de datos/);
	});
});
