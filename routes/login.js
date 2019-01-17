var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res,) {
    res.render('login', { title: '登陆' });
});
router.post('/',function(req,res){
    let account = req.body.account;
    let password = req.body.password;
    let login_sql = "select * from user where account=?";
    db.query(login_sql,[account],function(rows){
        console.log("查询语句",login_sql)
        console.log("登陆结果",rows[0]);
        if(rows != null && rows.length > 0){
            //登录成功
            console.log("查询成功！")
            if(password == rows[0].password){
              res.redirect('/index?account='+rows[0].account)
            }else{
              res.render("login",{
                error: "密码错误！",
                account: rows[0].account
              })
            }
        }else{
            //登录失败
            res.render('login',{error:"您未注册，请先注册！"});
        }
    });
});

module.exports = router;
