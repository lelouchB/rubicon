const cmonRoutes = require("./cmon.routes");

module.exports = function (app, db) {
  cmonRoutes(app, db);
};
