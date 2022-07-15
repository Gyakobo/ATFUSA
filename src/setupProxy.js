const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/webappTracking/MainMenu.json", {
        target: "https://www.atfusa.org", 
        changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware("/webappTracking/JNC/FldEventMenu.json", {
        target: "https://www.atfusa.org", 
        changeOrigin: true,
        })
    );
};

/*const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/webappTracking/JNC/FldEventMenu.json", {
            target: "https://www.atfusa.org",
            changeOrigin: true
        })
    );
};*/