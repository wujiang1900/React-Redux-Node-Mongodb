let Test = require('../../models/test');

module.exports = {
  post: {
    test(req, res, secret) {

    }
  },
  get: {
    test(req, res, secret) {
      res.send({total: 4});
    }
  },
  put: {},
  delete: {},
  options: {}
};