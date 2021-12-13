const colors = require('colors');
const express = require('express');

const server = express();
server.get('/', function (req, res) {
    res.send('<h1>Hello World with Express and Node</h1>');
    res.end();
});
server.listen(3000, function () {
    console.log("server on 3000".blue);
});