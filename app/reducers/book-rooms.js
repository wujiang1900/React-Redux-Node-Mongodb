import * as types from '../constants/ActionTypes';

const initialRoomState = {
  hideCheckBox: false,
  isChecked: false,
  guests: [1, 0]
};


const initialState = {
  rooms: []
};

const initApp = totalRooms=> {
  let state = Object.assign({}, initialState);
  
  for(let i=0; i<totalRooms; i++) {
    state.rooms[i] = Object.assign({}, initialRoomState);
    if(i===0) {
      state.rooms[i].hideCheckBox = true;
      state.rooms[i].isChecked = true;
    }
  }
  return state;
}

export default function bookRooms(state = initialState, action) {
  switch (action.type) {
    case types.INIT_ROOM_BOOKING:
      initApp(action.totalRooms);
      return state;

    case types.GUEST_CHANGE:
      return state;

    default:
      return state;
  }
}
