// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sara123',
  database: 'amusementpark',
  connectionLimit: 10, 
});

module.exports = { pool };