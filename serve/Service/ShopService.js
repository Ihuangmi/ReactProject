let ShopModel = require('../Models/ShopModel');


class ShopService {
    constructor() {
        this.shopModel = new ShopModel();
    }
    checkShop(name,callback) {

        let ob = {
            msg: "数据不存在",
            code: -1
        }

        this.shopModel.selectshop(name,function (users) {
            if (users.length < 1) {
                callback(ob);
                return;
            }
            callback(users);

        });
        
    }

    checkFood(callback) {

        let ob = {
            msg: "数据不存在",
            code: -1
        }

        this.shopModel.selectfood(function (users) {
            if (users.length < 1) {
                callback(ob);
                return;
            }
            callback(users);

        });
        
    }

    checkSearchs(name,callback){
        let ob = {
            msg: "未搜索到结果",
            code: -1
        }

        this.shopModel.selectSearch(name, function (users) {
            console.log(users.length)

            if (users.length < 1) {
                callback(ob);
                return;
            }
            ob.msg="搜索成功"
            ob.code=1;
            callback(users);
        });
    }

    checkCart(id,callback){
       
        this.shopModel.selectCart(id, function (users) {

            callback(users);
        });
    }





}
module.exports = ShopService;