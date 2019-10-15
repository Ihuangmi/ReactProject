//引入用户模块
let UserService = require('../Service/UserService');


module.exports.checkUser = function (req, res) {
    //解析提交数据
    let name = req.body.name;
    let passwd = req.body.passwd;
    //创建业务对象
    let userService = new UserService();
    //验证用户是否合法
    userService.checkUser(name, passwd, function (ob) {
        res.json(ob);
    });
}

module.exports.addUser = function (req, res) {
    //解析提交数据
    let name = req.body.name;
    let passwd = req.body.passwd;
    //创建业务对象
    let userService = new UserService();
    //验证用户是否合法
    userService.addUser(name, passwd, function (ob) {
        res.json(ob);
    });
}