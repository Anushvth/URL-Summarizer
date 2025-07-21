const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yb1xmp7s59',
  database: 'url_summary_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
  
  // Create table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS summaries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      url TEXT NOT NULL,
      summary TEXT NOT NULL,
      points JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  connection.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('✅ Summaries table ready');
    }
  });
});

module.exports = connection;
