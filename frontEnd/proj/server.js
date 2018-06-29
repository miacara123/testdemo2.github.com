var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
    console.log(req.method, req.url);
    next();
};

var helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};

app.use(logger); // logger中间件依旧是响应所有请求
app.use('/hello', helloWorld); //在指定路径加载一个中间件函数  中间件helloWorld()将仅响应路径为/hello的请求
app.use('/goodbye', goodbyeWorld); // 中间件goodbyeWorld()将仅响应路径为/goodbye的请求
app.listen(3000);
console.log('Server running at http://localhost:3000/');