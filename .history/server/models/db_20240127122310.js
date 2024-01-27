// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'amusementpartk_tut',
  connectionLimit: 10, 
});

module.exports = { pool };