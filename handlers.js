const handlers = {};

handlers.notFound = function(data, callback) {
    callback(404);
};

handlers.ping = function(data, callback) {
    callback(200);
};

handlers.hello = function(data, callback) {
    callback(200, {"message": "Welcome to the Neverland"});
};

module.exports = handlers;