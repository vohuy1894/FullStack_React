const Pool = require("pg").Pool;

const pool = new Pool({
    user: "huyvo",
    password: "testing123",
    host: "localhost",
    port:5432,
    database: "restaurantreact"
});

module.exports = pool;