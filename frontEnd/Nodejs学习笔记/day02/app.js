// 使用monk连接mongodb
var monk = require('monk');
var db = monk('localhost:27017/monk-app');

var products = db.get('products');
products.find({}, function(err, docs) {
    console.log(docs);
})