//引入父类
let SqlBase = require('./SqlBase');
class UserModel extends SqlBase {
    constructor() {
        super();
    }

    selectByName(name, callback) {
        //编写sql语句
        let sql = `select * from users where name='${name}'`;

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

    insertUser(name, passwd, callback) {
        //编写sql语句
        let sql = `insert into users(name,passwd) values('${name}','${passwd}')`;
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
}

module.exports = UserModel;