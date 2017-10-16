
var credentials ={

	credentials: {		
		client_id: process.env.FORGE_CLIENT_ID || '6k4FLeNnhuAg8rsG2YUW6ssyXqFCtTFR',
		client_secret: process.env.FORGE_CLIENT_SECRET || 'V3c6ab33a5513434',
		grant_type: 'client_credentials',
		scope: 'viewables:read', 
	
	    callbackUrl: process.env.CALLBACK_URL || '<replace with your callbackUrl>' 
	},
	
	BaseUrl: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

credentials.Authentication =credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'

module.exports = credentials;