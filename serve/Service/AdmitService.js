//引入Usermodel
let AdmitModel = require('../Models/AdmitModel');
class UserService {
    constructor() {
        this.admitModel = new AdmitModel();
    }

    deleteUser( name,callback)  {

        let ob = {
            msg: "用户不存在",
            code: -1
        }

        let that = this;
   
        this.admitModel.selectByName(name, function (users) {
            console.log(users)
    
    
                if (users.length < 1) {
                    callback(ob);
                    return;
                }
                that.admitModel.deleteUser( name, function (data) {
                    ob.msg = "删除成功";
                    ob.code = 1;
                    callback(ob);
                });
    
    
            });

        
    }

    addUser( img,name,rate,startPrice, shipping,time, callback) {
        let ob = {
            msg: "商家已经存在",
            code: -1
        }

        let that = this;


        this.admitModel.selectByName(name, function (users) {
        console.log(users)


            //如果根据名字查询的用户已经存在，就给用户返回【用户已经存在】
            if (users.length >= 1) {
                // console.log(ob.msg);
                callback(ob);
                return;
            }
            //如果用户不存在，就插入新用户
            that.admitModel.insertUser(img,name,rate,startPrice, shipping,time,  function (data) {
                ob.msg = "插入成功";
                ob.code = 1;
                // console.log(ob.msg);
                callback(ob);
            });


        });
    }




}

module.exports = UserService;