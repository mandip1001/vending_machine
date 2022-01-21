'use strict';
const app = require('./app');
const http = require('http');

const PORT = process.env.PORT;
const server = http.createServer(app);
app.set('PORT_NUMBER', PORT);

server.listen(PORT, ()=> {
    console.log(`Vending machine server runnin on  PORT ${PORT}`)
});

process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    })
})

