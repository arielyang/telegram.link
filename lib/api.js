//     telegram.link
//     Copyright 2014 Enrico Stara 'enrico.stara@gmail.com'
//     Released under the MIT License
//     http://telegram.link

// Import dependencies
var tl = require('telegram-tl-node');

// API TL schema as provided by Telegram
var apiTlSchema = require('./api-tlschema.json');

// Declare the `type` module
var type = {_id: 'api.type'};
// List the `api` constructors
var constructors = ['Bool', 'Error', 'Null', 'auth.SentCode'];
// Build  the constructors
tl.TypeBuilder.buildTypes(apiTlSchema.constructors, constructors, type);
// Export the 'type' module
exports.type = type;

// Declare the `service` module
var service = { _id: 'api.service'};
// List the `api' methods
var methods = ['auth.sendCode'];
// Build registered methods
tl.TypeBuilder.buildTypes(apiTlSchema.methods, methods, service, true);
// Export the 'service' module
exports.service = service;