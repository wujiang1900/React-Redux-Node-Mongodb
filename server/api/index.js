const Resources = require('../../app/constants/resources').default;
const api = {
  root: require('./root')
};

module.exports = (app) => {
  /**
   * Test
   */
  app.post(Resources.api.roomtotal, (req, res) => {
    api.root.post.roomtotal(req, res, app.get('superSecret'));
  });
  app.get(Resources.api.roomtotal, (req, res) => {
    api.root.get.roomtotal(req, res, app.get('superSecret'));
  });
};