var express = require('express');
var app = express();
var port = process.env.PORT || 6789;
var server = require('http').createServer(app);
    server.listen(port);
var fs = require('fs');
var path = require("path");
var directory = path.resolve('./');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('./app'));
