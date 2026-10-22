const express = require('express');
const route = express.Router();
const SearchControllers = require('../controllers/SearchControllers');

route.get("/account", SearchControllers.account);
module.exports = route;