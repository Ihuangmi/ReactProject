//引入Usermodel
let UserModel = require('../Models/UserModel');
class UserService {
    constructor() {
        this.userModel = new UserModel();
    }

    checkUser(name, passwd, callback) {

        let ob = {
            msg: "用户不存在",
            code: -1
        }

        this.userModel.selectByName(name, function (users) {
            if (users.length < 1) {
                // console.log(ob.msg);

                callback(ob);
                return;
            }

            //获得用户对象
            let user = users[0];
            //获得用户的密码
            let buffer = user.passwd;
            if (buffer == passwd) {
                ob.msg = "用户合法";
                ob.code = 1;
            } else {
                ob.msg = "用户密码错误，请重新验证";
                ob.code = 0;
            }
            // console.log(ob.msg);

            callback(ob);
        });
    }

    addUser(name, passwd, callback) {

        let ob = {
            msg: "用户已经存在",
            code: -1
        }

        let that = this;


        this.userModel.selectByName(name, function (users) {
            //如果根据名字查询的用户已经存在，就给用户返回【用户已经存在】
            if (users.length >= 1) {
                // console.log(ob.msg);
                callback(ob);
                return;
            }
            //如果用户不存在，就插入新用户
            that.userModel.insertUser(name, passwd, function (data) {
                ob.msg = "注册成功";
                ob.code = 1;
                // console.log(ob.msg);
                callback(ob);
            });


        });
    }

}

module.exports = UserService;