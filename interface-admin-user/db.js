const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '0123456789',
    database: process.env.DB_NAME || 'gestion_des_utilisateurs'
});

module.exports = pool.promise();
