let Rooms = require('../../models/rooms');

module.exports = {
  post: {
    rooms(req, res, secret) {
      const id = req.body.id;
      if(!id) {
        Rooms.create({rooms: req.body.rooms}, function(err, rooms) {
          if (err)
              return res.status(500).send(err);
          else
             return res.send(rooms);
        })
      }
      else
      Rooms.findByIdAndUpdate(id, req.body, function(err, rooms) {
        if (err)
            return res.status(500).send(err);
        else
           return res.send(rooms);
      }
    )}
  },
  get: {
    rooms(req, res, secret) {
      // Rooms.remove({}, ()=>{});
      Rooms.findOne(function(err, rooms) {
          if (err)
            return res.status(500).send(err);
          else {
            if(!rooms) 
              rooms = {total: 4};
            return res.send(rooms);
          }
      });
    }
  },
  put: {},
  delete: {},
  options: {}
};