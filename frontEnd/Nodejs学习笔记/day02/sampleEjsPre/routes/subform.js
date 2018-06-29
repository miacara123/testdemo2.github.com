var express = require('express');
var router = express.Router();

// router.get('/', function(req, res){
//     var useName = req.query.un1;
//     usePwd = req.query.pwd1,

//     console.log('req.query用户名：'+useName);
//     console.log('req.query密码：'+usePwd);

//     res.render('subform', { title:'提交表单及接受参数实例' });
// });

router.get('/', function(req, res){
    res.render('subform', { title:'get提交表单' });
})

router.post('/', function(req, res){
    var useName = req.body.un1;
    var usePwd = req.body.pwd1;
    console.log('req.body用户名：'+useName);
    console.log('req.body密码：'+usePwd);

    res.render('subform', { title:'提交表单及接受参数实例' });
});

module.exports = router;