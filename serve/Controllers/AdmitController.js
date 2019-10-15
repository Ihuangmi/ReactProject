//引入用户模块
let AdmitService = require('../Service/AdmitService');
let admitService = new AdmitService();

module.exports.addUser = function (req, res) {
    //解析提交数据
    let img = req.body.img;
    let name = req.body.name;
    let rate = req.body.rate;
    let startPrice = req.body.startPrice;
    let shipping = req.body.shipping;
    let time = req.body.time;
    //验证用户是否合法
    admitService.addUser( img,name,rate,startPrice, shipping,time,function (ob) {
        //如果用户合法
        // if (ob.code == 1) {
        //     req.session.login = true;
        // }
        res.json(ob);
    });

}

module.exports.deleteUser = function (req, res){
    let name = req.body.name;
    admitService.deleteUser(name,function(ob){
        res.json(ob);
    })
}