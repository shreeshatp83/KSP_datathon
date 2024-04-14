const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const auth = require('../middleware/auth');

// Define your routes here
router.post('/login', controller.login);
router.get('/data', controller.getData);
router.post('/data', controller.createData);
router.get('/data/:unitName', controller.getDataByUnitName); // Add this line
router.get('/fir/:id', controller.getFIRByID); // Add this line

module.exports = router;