var settings = {
	sessionSecret: 'sh44FSFEIPANVPOEANVh5h55h66h7h7x01hhh!',
	port: process.env.PORT || '3000',
	debug: (process.env.NODE_ENV !== 'production')
};

settings.uri = 'http://localhost:' + settings.port;

if (process.env.NODE_ENV == 'production') {
	settings.uri = 'http://mydomain.com';
	settings.port = process.env.PORT || 80;
}
module.exports = settings;