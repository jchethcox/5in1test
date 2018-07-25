const csscolorsObj = require("css-color-names");
const { map, keys, prop } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const { append } = require("ramda");

const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k.csscolorsObj)
});

let colors = map(createColor, keys(csscolorsObj));

module.exports = app => {
  app.get("/colors", (req, res) => {
    res.send(colors);
  });
  app.post("/colors", bodyParser.json(), (req, res) => {
    if (isNil(req.body)) {
      res
        .status(500)
        .send({ ok: false, message: "must have a json document to post" });
      return;
    }
    req.body.id = uuid.v4();
    append(req.body, colors);
    res.send({ ok: true });
  });
};
