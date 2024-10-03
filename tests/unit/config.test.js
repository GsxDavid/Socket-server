const config = require("../../config/config");

describe("Configuración de variables de entorno", () => {
	test("Debería definir todas las variables de entorno requeridas", () => {
		const v = Object.keys(config);

		v.forEach(key => {
			expect(config[key]).toBeDefined();
		});
	});

	test("Debería asignar el valor por defecto para DB_HOST si no está definido en el entorno", () => {
		expect(config.DB_HOST).toBe("mongodb://127.0.0.1:27017");
	});

	test("Debería asignar el valor por defecto para PORT si no está definido en el entorno", () => {
		expect(config.PORT).toBe(3000);
	});
});
