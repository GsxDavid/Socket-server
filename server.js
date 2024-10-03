import { createServer } from "http";
import process from "process";
import createSocketServer from "./sockets/socketServer.js";

// * Punto de entrada de la aplicación

const server = createServer();
const io = createSocketServer(server);

const PORT = process.env.PORT;

server.listen(3000, () => {
	console.log(`Server running on http://localhost:${PORT || 3000}`);
});
