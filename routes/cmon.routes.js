const ObjectID = require("mongodb").ObjectID;
module.exports = function (app, db) {
  app.delete("/cmon/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("cmon").removeOne(details, (err, item) => {
      if (err) {
        return err;
      } else {
        res.send("Data with id " + id + " deleted");
      }
    });
  });
  app.get("/cmon/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("cmon").findOne(details, (err, item) => {
      if (err) {
        return err;
      } else {
        res.send(item);
      }
    });
  });

  app.post("/cmon", (req, res) => {
    const cmonData = {
      text: req.body.body,
      title: req.body.title,
    };
    db.collection("cmon").insertOne(cmonData, (err, result) => {
      if (err) {
        return err;
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.put("/cmon/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const cmonData = {
      text: req.body.body,
      title: req.body.title,
    };
    db.collection("cmon").update(details, cmonData, (err, item) => {
      if (err) {
        res.send("an error has occured");
      } else {
        res.send("Updated");
      }
    });
  });
};
