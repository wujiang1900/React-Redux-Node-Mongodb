import * as types from '../constants/ActionTypes';

const initialRoomState = {
  hideCheckBox: false,
  isSelected: false,
  guests: [1, 0]
};


const initialState = {
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
      return {
        // ...state,
        rooms: initRooms(action.totalRooms) 
      }

    case types.CLICK_ROOM:
      return {
        rooms: clickRoom(state.rooms, action.roomNo) 
      }
      
    case types.GUEST_CHANGE:
      return {
        rooms: guestChange(state.rooms, action.payload) 
      }

    default:
      return state;
  }
}
