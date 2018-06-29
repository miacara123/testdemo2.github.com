var express = require('express');
var router = express.Router();

/* GET home page. */
// res.render表示调用模板引擎解析名字index的模板，并传入title这个对象作为参数
// 为什么他会知道解析views目录下的index.ejs,而不是其他目录下的文件，原因是app.js中设置了。
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
