
const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
    // user: process.env.PG_USER,
    // host: process.env.PG_HOST,
    // port: process.env.PG_PORT,
    // database: process.env.PG_DATABASE,
    // user: "huyvo",
    // host: "localhost",
    // port: "5432",
    // database: "restaurantreact",
    connectionString: "postgres://bscmmkllrovnqr:897a97dc6e23f51c293c30b83511b5d4d4353044fb84b45ddf7f144e2840a1c7@ec2-34-231-221-151.compute-1.amazonaws.com:5432/d9e7a0k4tkmmmn",
    ssl: { rejectUnauthorized: false }
});
console.log(pool);
// module.exports = pool;

// const { Pool } = require("pg");
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.PG_USER}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const pool = new Pool({
//   connectionString: isProduction
//     ? "postgres://bscmmkllrovnqr:897a97dc6e23f51c293c30b83511b5d4d4353044fb84b45ddf7f144e2840a1c7@ec2-34-231-221-151.compute-1.amazonaws.com:5432/d9e7a0k4tkmmmn"
//     : connectionString,
//   ssl: isProduction ? { rejectUnauthorized: false } : false,
// });

module.exports = {
  query: (text, params) => pool.query(text, params),
};