var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');

mongoose.connect('mongodb://localhost/playerData');
var Schema = mongoose.Schema;
var levelxp = 1;
var xp = 0;
var hp = 100;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.get('/', function (req, res) {
	app.use(express.static('public'));
});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
	// console.log('Connected to database');
	// var playerSchema = mongoose.Schema({
	// level: String
	// });
	// var Player = mongoose.model('Player', playerSchema);
	// var level = new Player({ level: levelxp});
	// console.log(level.level);
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
