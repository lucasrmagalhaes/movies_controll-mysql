const express = require('express'),
    server = express(),
    cors = require('cors');

server.use(cors());
server.use(express.json());
    
require('./routes/routes.js')(server);

server.listen(5000, () => {
    console.log('http://localhost:5000')
})
