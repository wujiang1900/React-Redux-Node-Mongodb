let mongoose = require('mongoose');
let config = require('../../config');

module.exports = () => {
  mongoose.connect(config.database);
  mongoose.connection.on('error', function () {
    console.info('Connection error! Have you executed mongod?');
  });

  return {
    connection: mongoose.connection
  }
};