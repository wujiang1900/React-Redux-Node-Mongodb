let Test = require('../../models/test');

module.exports = {
  post: {
    roomtotal(req, res, secret) {

    }
  },
  get: {
    roomtotal(req, res, secret) {
      res.send({total: 4});
    }
  },
  put: {},
  delete: {},
  options: {}
};