const create = require('./create');
const check = require('./check');
const search = require('./search');
const profile = require('./profile');
const request = require('./request');
function route (app) {
    app.use("/api/create", create);
    app.use("/api/check", check);
    app.use("/api/search", search);
    app.use("/api/profile", profile);
    app.use("/api/request", request);
}
module.exports = route;