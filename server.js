// Dependencies
var Boom    = require('boom');
var Joi     = require('joi');
var Path    = require('path');
var Hapi    = require('hapi');
var Vision 	= require('vision');
var Inert 	= require('inert');
var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lamborghini1',
  database : 'appanalytics'
});
var ClientOAuth2 = require('client-oauth2');
var snapAuth = new ClientOAuth2({
    clientId: '51015e0d-653b-495a-8b5e-82b548c0908c',
    clientSecret: '8fa6f2769e5da008b51b',
    accessTokenUri: 'https://accounts.snapchat.com/login/oauth2/access_token',
    authorizationUri: 'https://accounts.snapchat.com/login/oauth2/authorize',
    redirectUri: 'https://analytics.bithereum.network/auth/snapchat',
    scopes: []
});

// Template Engine
var Handlerbars = require('handlebars');
var HandlebarsLayouts = require('handlebars-layouts');
HandlebarsLayouts.register(Handlerbars);

// HTTP Server
var server = Hapi.server({
	 	port: 8000,
	  routes: {
			cors: {
				credentials: true
			}
	 }
});

// HTTP Server Initialization Configuration
var initialization = async function() {

	// Register modules
	await server.register(Vision);
	await server.register(Inert);

	// Setup view rendering
	server.views({
			engines: {
					html: {
						module: Handlerbars
					}
			},
			relativeTo: Path.join(__dirname, 'public'),
			path: './views',
			partialsPath: './views'
	});

	// Base HTTP route
	server.route({
			method: 'GET',
			path: '/',
			handler: function(request, reply)
			{
					return reply.view('base', {});
			}
	});
	server.route({
			method: 'GET',
			path: '/auth/snapchat/init',
			handler: function(request, reply)
			{
          var uri = snapAuth.code.getUri();
          return reply.redirect(uri)
			}
	});
	server.route({
			method: 'GET',
			path: '/auth/snapchat',
			handler: function(request, reply)
			{
          console.log(request.url.path;);
          // snapAuth.code.getToken(req.originalUrl)
          //     .then(function (user) {
          //     });
			}
	});

  // Handles public file routing
	server.route({
	    method: 'GET',
	    path: '/{param*}',
	    handler: {
	        directory: {
	            path: 'public',
	            listing: true
	        }
	    }
	});

	// Attempt to start the HTTP Server
	try {
			await server.start();
	}
	catch (err) {
			process.exit(1);
	}
};

// Initilize HTTP Server
initialization();
