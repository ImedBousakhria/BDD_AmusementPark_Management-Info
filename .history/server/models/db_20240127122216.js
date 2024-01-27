// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'amusementpartk',
  connectionLimit: 10, 
});

module.exports = { pool };