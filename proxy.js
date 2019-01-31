var redbird = new require('redbird')({
  	port: 80,
  	ssl: {
  		port: 443,
  		key: "ssl/server.key",
  		cert: "./ssl/server.crt",
  	}
});

redbird.register('analytics.bithereum.network', 'http://localhost:8000', {ssl: true});
