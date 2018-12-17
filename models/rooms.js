const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema =  Schema({
  hideCheckBox: {type: Boolean},
  isSelected: {type: Boolean},
  guests: [Number]
});

let roomsSchema =  Schema({
  total: {type: Number, default: 4, required: true},
  rooms: [roomSchema]
});

const Room = mongoose.model('Room', roomSchema);
module.exports = mongoose.model('Rooms', roomsSchema);