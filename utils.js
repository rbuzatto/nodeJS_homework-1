const url = require('url');

const dataObjectFromRequest = function(request) {
    const urlParsed = url.parse(request.url, true);

    const data = {};
    data.method     = request.method.toLowerCase();
    data.headers    = request.headers;
    data.path       = urlParsed.pathname.replace(/^\/+|\/+$/g, '');
    data.query      = urlParsed.query;

    return data;
}

module.exports = { dataObjectFromRequest };