var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var proxy = require('proxy-middleware');
var url = require('url');
var say = require('say');

function startWebpack() {
	return new WebpackDevServer(webpack(config), {
	  publicPath: config.output.publicPath,
	  hot: true,
	  historyApiFallback: true,
	}).listen(3000, 'localhost', function (err, result) {
	  if (err) {
	    console.log(err);
	  }

	  console.log('dev server listening at localhost:3000');
	});
}


function startSocket() {
	var app = require('express')();
	var http = require('http').Server(app);
	var io = require('socket.io')(http);

	app.use('/static', proxy(url.parse('http://localhost:3000/static')));

	app.get('/', function(req, res){
		res.sendfile('index.html');
	});

	io.on('connection', function(socket){
		console.log('a user connected');

		socket.on('botsay', function(message) {
			console.log('bot saying', message);

			say.speak('Alex', message, function () {
				console.log('bot said', message);
			});
		});
	});

	http.listen(8000, function(){
		console.log('listening on *:8000');
	});
}

startWebpack();
startSocket();
