const { Server } = require("socket.io");
const { validateToken } = require("../services/auth");
const process = require("process");

function createSocketServer(server) {
	const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:4200";

	const io = new Server(server, {
		cors: {
			origin: allowedOrigin,
			methods: ["GET", "POST"],
			credentials: true,
		},
	});

	io.use((socket, next) => {
		// Objeto de autenticación enviado desde el cliente
		const token = socket.handshake.auth.token;

		if (token) {
			// Si el token no es válido se levanta una excepción desde la función
			const data = validateToken(token);

			if (data) {
				console.log("Se ha autenticado correctamente...");
				const details = { rol: data.rol, uid: data.uid };
				socket.data = details;
				next();
			} else {
				console.log("No se ha validado el token");
			}
		} else {
			console.log("No se ha enviado el token de autenticación");
		}
	});

	// Socket
	io.on("connection", socket => {
		joinRoom(socket, socket.data.rol);


		socket.on("disconnect", socket => {
			console.log("Se ha desconectado el cliente");
		});
	});

	return io;
}

function joinRoom(socket, room) {
	switch (room) {
		case "room1":
			socket.join("room_1");
			console.log(`Cliente ${socket.id} se unió a la sala...`);
			break;

		default:
			console.log(`Sala desconocida: ${room}`);
			break;
	}
}

module.exports = createSocketServer;
