let Rooms = require('../../models/rooms');

module.exports = {
  post: {
    rooms(req, res, secret) {
console.log(req.body)
res.sendStatus(200);
    }
  },
  get: {
    rooms(req, res, secret) {
      res.send({total: 4});
    }
  },
  put: {},
  delete: {},
  options: {}
};