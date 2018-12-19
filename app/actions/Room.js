import * as types from '../constants/ActionTypes';
import Resources from '../constants/resources';
import instance from '../config/axiosconfig';

export const initRooms = ()=> ({
  type: types.INIT_ROOM_BOOKING,
  payload: Resources.request.get(Resources.api.rooms)
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
