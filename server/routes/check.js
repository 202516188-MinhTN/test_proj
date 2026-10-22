const express = require('express');
const route = express.Router();
const CheckControllers = require('../controllers/CheckControllers');

route.post("/", CheckControllers.check);
route.post("/login", CheckControllers.login);
module.exports = route;