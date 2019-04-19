const controller = {
  newGuest: (req, res) => {
    const responseBody = {
      id: 'dataBaseId',
      name: req.body.name,
      lastname: req.body.lastname,
      menu: req.body.menu,
      bus: req.body.bus,
    };
    res.status(200);
    res.json(responseBody);
  },
};

module.exports = controller;
