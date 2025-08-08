const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,     // třeba 'localhost'
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Chyba při připojení k DB:', err);
  } else {
    console.log('✅ Připojeno k databázi');
  }
});

module.exports = connection;