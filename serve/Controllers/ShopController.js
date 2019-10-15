let ShopService = require('../Service/ShopService');

module.exports.getshop = function (req, res) {
    
    //创建业务对象
    let shopService = new ShopService();
    //验证用户是否合法
    shopService.checkShop(function (ob) {
        res.json(ob);
    });
}

module.exports.getfood = function (req, res) {
    
    //创建业务对象
    let shopService = new ShopService();
    //验证用户是否合法
    shopService.checkFood(function (ob) {
        res.json(ob);
    });
}

module.exports.searchs = function (req, res) {
    let name = req.body.data;
    console.log(name)

    //创建业务对象
    let shopService = new ShopService();
    //验证用户是否合法
    shopService.checkSearchs(name,function (ob) {
        res.json(ob);
    });
}

module.exports.cart = function (req, res) {
    let id = req.body.data;
    console.log(id)

    //创建业务对象
    let shopService = new ShopService();
    //验证用户是否合法
    shopService.checkCart(id,function (ob) {
        res.json(ob);
    });
}