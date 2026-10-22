const express = require('express');
const route = express.Router();
const ProfileControllers = require('../controllers/ProfileControllers');

route.get("/:slug", ProfileControllers.show);
module.exports = route;