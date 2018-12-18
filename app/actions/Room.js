import * as types from '../constants/ActionTypes';
import Resources from '../constants/resources';

export function initRooms() {
  return dispatch => {
    Resources.request
      .get(Resources.api.rooms)
      .then(response => {
        console.log(response)
        if(response.status === 200)
          dispatch(initBooking(response.data));
        // else  dispatch error handling action
      });
  }
}

const initBooking = (data)=> ({
  type: types.INIT_ROOM_BOOKING,
  data
})

export function clickRoom(roomNo) {
  return {
    type: types.CLICK_ROOM,
    roomNo
  }
}

export function selectGuest(payload) {
  return {
    type: types.GUEST_CHANGE,
    payload
  }
}

export function bookRooms(rooms, roomsDbId) {
  return dispatch => {
    Resources.request
      .post(Resources.api.rooms, {id: roomsDbId, rooms})
      .then(response => {
        if(!roomsDbId && response.status === 200)
          dispatch(updateRoomsDbId(response.data._id));
        // else  dispatch error handling action
      });
  }
}

const updateRoomsDbId = (id)=> ({
  type: types.UPDATE_ROOMS_DB_ID,
  id
})
