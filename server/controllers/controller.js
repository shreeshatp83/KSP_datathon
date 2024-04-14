const db = require('../models/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get data from the database
exports.getData = async (req, res) => {
  try {
    const data = await db.getData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
};

// Create data in the database
exports.createData = async (req, res) => {
  try {
    const newData = await db.createData(req.body);
    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating data' });
  }
};

// Get data by UnitName
exports.getDataByUnitName = async (req, res) => {
  try {
    const { unitName } = req.params;
    const data = await db.getDataByUnitName(unitName);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
};


exports.getFIRByID = async (req, res) => {
  try {
    const { id } = req.params;
    const fir = await db.getFIRByID(id);
    res.json(fir);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching FIR' });
  }
};


exports.login = async (req, res) => {
  try {
    const { Name, Password } = req.body;
    console.log(Name,Password)
    const user = await db.getUserByNameAndPassword(Name, Password);

    console.log(user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { Name: user.Name, Post: user.Post, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.cookie('token', token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); // Set cookie with token
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};