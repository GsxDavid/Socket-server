
# Servidor de sockets

Implementación de un servidor de sockets utilizando jwt, socket.io y mongodb para persistir información.

La aplicación cuenta con autenticación básica mediante JWT y el middleware de socket.io para permitir la conexión únicamente a usuario autorizados. Adicionalmente tiene una base de datos en Mongo para persistir la información

## Features

- Generación y decodificación de tokens JWT
- Filtro de usuarios autenticados mediante middleware de socket.io
- Persitencia de datos

## Environment Variables

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`PORT`

`CORS_ORIGIN`

`PUBLIC_KEY`
