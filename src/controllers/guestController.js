const database = require('../database');

const controller = {
  newGuest: (req, res) => {
    const guestData = req.body;
    database.saveGuest(guestData, (err, databaseData) => {
      if (!err || err != null) {
        res.status(500);
        res.body({
          status: 'error',
          message: 'database error',
        });
      } else if (err == null) {
        res.status(200);
        res.body({
          status: 'sucess',
          data: databaseData,
        });
      }
    });
  },
};

module.exports = controller;
