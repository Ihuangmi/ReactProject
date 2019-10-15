//引入父类
let SqlBase = require('./SqlBase');
class AdmitModel extends SqlBase {
    constructor() {
        super();
    }

    // 查询
    selectByName(name, callback) {
        //编写sql语句
        let sql = `select * from shop where name='${name}'`;

        // console.log(sql);

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }

    //插入
    insertUser(img, name, rate, startPrice, shipping, time, callback) {
        //编写sql语句
        let sql = `insert into shop(img,name,rate,startPrice, shipping,time) values('${img}','${name}','${rate}','${startPrice}','${shipping}','${time}')`;
        // console.log(sql);

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(result)

            callback(result);
        });
    }

    //删除
    deleteUser(name, callback) {
        //编写sql语句
        let sql = `delete  from shop where name='${name}'`;
        console.log(sql);

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result)

            callback(result);
        });
    }
}

module.exports = AdmitModel;