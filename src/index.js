'use strict';

var express = require('express');

var quotes = [
	'The pie is a lie.',
	'It\'s unsettling to meet people who don\'t eat pies.',
	'Serious pies are no joke.'
];

var app = express();

app
	.get('/quote', function (req, res) {
		res.send({
			quote: quotes[Math.floor(Math.random()*quotes.length)]
		});
	})
	.listen(1234, function () {
		console.log('The spoon is listening on port 1234')
	});
	
module.exports = app;