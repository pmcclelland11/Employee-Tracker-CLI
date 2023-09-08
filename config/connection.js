const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: employee_tracker_db,
    connectionLimit: 10,
  });
  
  module.exports = pool.promise();