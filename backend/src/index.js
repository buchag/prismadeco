const server = require('./server/server')
require('dotenv').config();
require('./db/config');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Backend PrismaDeco corriendo en el puerto ${PORT}`);
});

