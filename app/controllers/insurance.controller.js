const db = require("../models");
const Insurance = db.insurance;

// Create and Save 3 APIs request to MongoDB
exports.create = (req, res) => {

  let markers = [];

  let api1 = {
    "name": "api1",
    "deductible": 1000,
    "stop_loss": 10000,
    "oop_max": 5000
  };

  let api2 = {
    "name": "api2",
    "deductible": 1200,
    "stop_loss": 13000,
    "oop_max": 6000
  };

  let api3 = {
    "name": "api3",
    "deductible": 1000,
    "stop_loss": 10000,
    "oop_max": 6000
  };

  const apiOne = Promise.resolve(markers.push(api1));
  const apiTwo = Promise.resolve(markers.push(api2));
  const apiThree = Promise.resolve(markers.push(api3));

  Promise.all([apiOne, apiTwo, apiThree]).then(function () {
    if (markers && markers.length) {
      Insurance.insertMany(markers).then(data => {
        console.log(data);
        res.send(data);
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Error occurred while calling APIs."
          });
        });
    }
  }).catch(function (err) { console.error(err); });
};
