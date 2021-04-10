const { createPool, Pool } = require('mysql');
const { promisify }  = require('util');

const pool = createPool({
    database: "qlpg7y0bqqfpb70u",
    host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "q6nfzv2dhphu5now",
    password: "lox0muxgx6pbetw4",
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error);
    } else {
        pool.releaseConnection(connection);
        console.log("DB IS CONNECTED")
    }
});

pool.query = promisify(pool.query) ;

module.exports = pool;