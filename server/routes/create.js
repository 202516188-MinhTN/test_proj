const express = require('express');
const route = express.Router();
const CreateControllers = require('../controllers/CreateControllers');

route.post("/account", CreateControllers.account);
route.post("/product", CreateControllers.product);
module.exports = route;