const GuestModel = require('../models/guestModel');

const controller = {
  newGuest: (req, res) => {
    const guest = new GuestModel();
    guest.name = req.body.name;
    guest.lastname = req.body.lastname;
    guest.menu = req.body.menu;
    guest.bus = req.body.bus;

    guest.save((err) => {
      if (err) {
        res.status(500);
        res.json({ status: 'error', message: 'database error' });
      } else {
        res.status(200);
        res.json({ status: 'success', message: 'guest saved', data: guest });
      }
    });
  },
};

module.exports = controller;
