const jwt = require("jsonwebtoken");
const { PUBLIC_KEY } = require("../config/config");

const publicKey = PUBLIC_KEY;

function validateToken(token) {
	if (!publicKey) {
		throw new Error("La clave pública no está definida en las variables de entorno.");
	}

	try {
		const decoded = jwt.verify(token, publicKey);
		return decoded;
	} catch (error) {
		handleError(error);
	}
}

function handleError(error) {
	if (error instanceof jwt.JsonWebTokenError) {
		if (error.message == "jwt malformed") {
			throw new Error("Token mal formado, el token no tiene tres componentes (delimitados por un .)");
		}
	} else if (error instanceof jwt.TokenExpiredError) {
		throw new Error("Token ha expirado: " + error.message);
	} else {
		throw new Error("Error al decodificar el token: " + error.message);
	}
}

module.exports = {
	validateToken,
};
