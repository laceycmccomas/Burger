var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    passoword: "root",
    database: "burgers_db"
});

connection.connect (function(err) {
    if (err) throw err;
    console.log ("connected as id" + connection.threadId);
});

module.exports = connection;