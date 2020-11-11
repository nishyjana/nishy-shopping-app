const proxy = require('http-proxy-middleware');

    module.exports = function(app) {
        app.use(proxy('/api/products', { target: 'http://localhost:5001' }));
        //app.use(proxy('/otherApi/**', { target: 'http://localhost:5001' }));
    };