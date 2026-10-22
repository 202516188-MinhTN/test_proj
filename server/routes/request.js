const express = require('express');
const route = express.Router();
const RequestControllers = require('../controllers/RequestControllers');

route.post("/", RequestControllers.index);
route.get("/:name", RequestControllers.show);
route.delete("/:name", RequestControllers.deleteRequest);
module.exports = route;