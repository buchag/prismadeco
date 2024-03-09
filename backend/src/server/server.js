
const express = require('express');
const cartRouter = require('../routes/cartRoutes');
const server = express();

server.use(express.json());

server.get('/',(_, res)=> {
    res.send("Server NodeJS activo")
});

server.use('/api/cart', cartRouter)

module.exports= server;   //exportar el servidor para el carrito