//引入父类
let SqlBase = require('./SqlBase');
class ShopModel extends SqlBase {
    constructor() {
        super();
    }

    selectshop(callback) {
        //编写sql语句
        let sql = `select * from shop `

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    selectfood(callback) {
        //编写sql语句
        let sql = `select * from food `

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    selectSearch(name,callback) {
        //编写sql语句
        let sql = ` select * from shop where name like '%${name}%' `
        console.log(sql);


        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(result);
            callback(result);
        });
    }

    selectCart(id,callback) {
        //编写sql语句
        let sql = ` select * from food where id = '${id}' `
        console.log(sql);


        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(result);
            callback(result);
        });
    }


}

module.exports = ShopModel;