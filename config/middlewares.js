const bodyParser = require("body-parser");
const cor = require("cors");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(
    cor({
      origin: "*",
    })
  );
};
