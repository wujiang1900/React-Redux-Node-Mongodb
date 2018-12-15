let mongoose = require('mongoose');

let RoomSchema = new mongoose.Schema({
  hideCheckBox: {type: Boolean, required: true},
  isSelected: {type: Boolean, required: true},
  guests: [Number]
});

let RoomsSchema = new mongoose.Schema({
  total: {type: Number, required: true},
  rooms: [RoomSchema]
});

module.exports = mongoose.model('Rooms', RoomsSchema);