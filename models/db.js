var mysql = require("mysql");
var db = {};
db.query = function (sql,queryArray, callback) {
    var connect = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'abc123456',
        database:'test_first',
        port: 3306,
        multipleStatements: true
    });
    connect.connect();
    connect.query(sql,queryArray, function (err,rows) {
      console.log(sql)
        if(err)console.log(err);
        callback(rows);
    });
    connect.end();
};

module.exports = db;