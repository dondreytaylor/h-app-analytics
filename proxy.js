var redbird = new require('redbird')({
  	port: 80,
  	ssl: {
  		port: 443,
  		key: "ssl/s.haystack.ai.key",
  		cert: "./ssl/s.haystack.ai.cer",
  	}
});

redbird.register('analytics.bithereum.network', 'http://localhost:8000', {ssl: true});
