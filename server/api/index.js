const Resources = require('../../app/constants/resources').default;
const api = {
  root: require('./root')
};

module.exports = (app) => {
  /**
   * /rooms
   */
  app.post(Resources.api.rooms, (req, res) => {
    api.root.post.rooms(req, res, app.get('superSecret'));
  });
  app.get(Resources.api.rooms, (req, res) => {
    api.root.get.rooms(req, res, app.get('superSecret'));
  });
};