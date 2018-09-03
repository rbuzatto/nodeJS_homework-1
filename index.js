const http = require('http');
const StringDecoder = require('string_decoder').StringDecoder;

const { port, mode } = require('./config');
const handlers       = require('./handlers');
const { dataObjectFromRequest } = require('./utils');

const server = http.createServer((req, res) => {

    const decoder = new StringDecoder('utf-8');
    let payload = '';

    req.on('data', (data) => {
        payload += decoder.write(data); 
    });

    req.on('end', () => {
        payload += decoder.end();
        
        const data = { ...dataObjectFromRequest(req), payload };
        const chosenHandler = typeof(router[data.path]) !== 'undefined' ? router[data.path] : handlers.notFound;
        
        chosenHandler(data, (statusCode = 200, payload = {}) => {
            const payloadToString = JSON.stringify(payload);

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            
            res.end(payloadToString)
        });
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port} in ${mode} mode`);
});

const router = {
    'hello': handlers.hello
}