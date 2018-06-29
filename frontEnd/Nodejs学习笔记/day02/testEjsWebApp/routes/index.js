var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render 表示调用模板引擎解析名字index的模板
  // 为什么它会知道解析views目录下的index.ejs,而不是其他目录下的文件,或是其他后缀名的文件?
  // 原因就是app.js中设置:app.set('views', path.join(__dirname, 'views'));
  //                    app.set('view engine', 'ejs');
  res.render('index', { title: '<h1>Express</h1>'
                      , users: [{username: 'Wilson'},
                                {username: 'Wilson Zhong'},
                                {username: 'Zhong Wei'}]
            });
});

module.exports = router;
