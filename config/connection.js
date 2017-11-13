"use strict";

// Set up MySQL connection
var mysql = require("mysql");

var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
connection = mysql.createConnection({
    port: 3306,
    host: process.env.db_host || "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: process.env.db_user || "f4j5lvanq2wswanv",
    password: process.env.db_pw || "p2x0aa28zettr4yv",
    database: process.env.db || "rp0txifvwqzbnxhr"
});
// };

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("LET'S EAT!!!! Connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;