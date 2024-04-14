const mysql = require('mysql2/promise');
const dbConfig = require('../config/db.config');

// Create a connection pool
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// Get data from the database
exports.getData = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM FIR_ALL');
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Create data in the database
exports.createData = async (data) => {
  try {
    const [result] = await pool.query('INSERT INTO FIR_ALL SET ?', data);
    return { id: result.insertId, ...data };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get data by UnitName
exports.getDataByUnitName = async (unitName) => {
  try {
    const [rows] = await pool.query('SELECT * FROM FIR_ALL WHERE UnitName = ?', [unitName]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


exports.getFIRByID = async (id) => {
  try {
    console.log(typeof(parseInt(id)));
    const [rows] = await pool.query('SELECT * FROM FIR_ALL WHERE TableID = ?', [parseInt(id)]);
    console.log(rows);
    return rows[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


exports.getUserByNameAndPassword = async (Name, Password) => {
  try {
    const [rows] = await pool.query('SELECT Name, Post, id, Password FROM Police WHERE Name = ?', [Name]);
    const user = rows[0];

    if (user) {
      // const isPasswordValid = await bcrypt.compare(Password, user.Password);
      // if (isPasswordValid) {
        delete user.Password; // Remove the password from the user object
        return user;
      // }
    }

    return null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};