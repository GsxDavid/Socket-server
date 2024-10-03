const process = require("process");

const config = {
	PUBLIC_KEY: process.env.PUBLIC_KEY || "Est0esmiPubliJey",
	DB_HOST: process.env.DB_HOST || "mongodb://127.0.0.1:27017",
	PORT: process.env.PORT || 3000,
};

function validateVariables(config) {
	const undefinedVariables = [];
	// Recorrer las claves del objeto de configuración para verificar que no existan variables indefinidas
	for (const [key, value] of Object.entries(config)) {
		if (value === undefined) {
			undefinedVariables.push(key);
		}
	}

	// Si hay variables indefinidas, se lanza un error con el listado de variables vacias
	if (undefinedVariables.length > 0) {
		throw new Error(`Las siguientes variables de entorno no están definidas: ${undefinedVariables.join(", ")}`);
	}
}

validateVariables(config);

module.exports = config;
