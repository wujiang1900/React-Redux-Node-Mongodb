import * as types from '../constants/ActionTypes';
import Resources from '../constants/resources';

export function initRooms() {
  return dispatch => {
    Resources.request
      .get(Resources.api.roomtotal)
      .then(response => {
        // console.log(response)
        if(response.status === 200)
          dispatch(dispatchInitRooms(response.data));
        // else  dispatch error handling action
      });
  }
}

function dispatchInitRooms({total: totalRooms}) {
  return {
    type: types.INIT_ROOM_BOOKING,
    totalRooms
  }
}

export function clickRoom(roomNo) {
  return {
    type: types.CLICK_ROOM,
    roomNo
  }
}

export function selectGuest(payload) {
  // console.log('payload'+payload )
  return {
    type: types.GUEST_CHANGE,
    payload
  }
}