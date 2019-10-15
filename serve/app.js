let express = require("express")
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 允许跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// 后台管理页面
let AdmitController = require('./Controllers/AdmitController');
// insert 增
app.post('/insert', AdmitController.addUser);
// reduce  删
app.post('/reduce', AdmitController.deleteUser);


let ShopController = require('./Controllers/ShopController');
// 首页商家数据
app.post('/home', ShopController.getshop);
// 商品数据
app.post('/food', ShopController.getfood);
// 搜索功能
app.post('/searchs', ShopController.searchs);
// 购物车
app.post('/cart', ShopController.cart);


// 登录注册
let UserController = require('./Controllers/UserController');
app.post('/login', UserController.checkUser);
app.post('/register', UserController.addUser);



app.listen(8080,function(){
    console.log("开启8080端口")
})