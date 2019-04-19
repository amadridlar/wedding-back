
const controller = {
  entryPoint: (req, res) => {
    res.status(200);
    res.send({ status: 'success', message: 'app is up' });
  },
};

module.exports = controller;
