import * as types from '../constants/ActionTypes';

const initialRoomState = {
  hideCheckBox: false,
  isSelected: false,
  guests: [1, 0]
};


const initialState = {
  roomsDbId: null,
  rooms: []
};

const initRooms = totalRooms=> {
  let rooms = new Array(totalRooms);
  for(let i=0; i<totalRooms; i++) {
    rooms[i] = JSON.parse(JSON.stringify(initialRoomState))
    if(i===0) {
      rooms[i].hideCheckBox = true;
      rooms[i].isSelected = true;
    }
  }
  return rooms;
}

const clickRoom = (rooms, roomNo)=> {
  const selected = rooms[roomNo].isSelected; // is the room selected or not?
  return rooms.map((room, i)=>{
    if(!selected && i <= roomNo) 
      // select all the rooms before clicked room
      room.isSelected = true;
    else if(selected && i >= roomNo)
      // de-select all the rooms after clicked room
      room.isSelected = false;
    return room;
  });
}

const guestChange = (rooms, {roomNo, type, guestNo})=> {
  // console.log('roomNo'+roomNo )
   return rooms.map((room, i)=>{
    if(i === roomNo) 
      room.guests[type] = guestNo;
    return room;
  });
}

export default function bookRooms(state = initialState, action) {
  switch (action.type) {
    case types.INIT_ROOM_BOOKING:
      let roomsDbId = action.data._id;
      let rooms = action.data.rooms;
      if(!roomsDbId) {
        rooms = initRooms(action.data.total);
      }
      return {
        // ...state,
        roomsDbId: roomsDbId,
        rooms: rooms
      }

    case types.CLICK_ROOM:
      return {
        roomsDbId: state.roomsDbId,
        rooms: clickRoom(state.rooms, action.roomNo) 
      }
      
    case types.GUEST_CHANGE:
      return {
        roomsDbId: state.roomsDbId,
        rooms: guestChange(state.rooms, action.payload) 
      }
    case types.UPDATE_ROOMS_DB_ID:
      return {
        roomsDbId: action.id,
        rooms: state.rooms 
      }

    default:
      return state;
  }
}
