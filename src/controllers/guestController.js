const database = require('../database');

const controller = {
  newGuest: (req, res) => {
    const guestData = req.body;
    database.saveGuest(guestData, (err, databaseData) => {
      if (err !== null) {
        res.status(500);
        res.body({
          status: 'error',
          message: err,
        });
      } else if (err === null) {
        res.status(200);
        res.body({
          status: 'success',
          id: databaseData.id,
          data: databaseData.guestData,
        });
      }
    });
  },
};

module.exports = controller;
