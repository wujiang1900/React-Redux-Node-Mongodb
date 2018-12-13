import * as types from '../constants/ActionTypes';
import Resources from '../constants/resources';

export function initRooms() {
  return dispatch => {
    Resources.request
      .get(Resources.api.test)
      .then(response => {
        dispatch(dispatchInitRooms(response));
      });
  };
}

function dispatchInitRooms(totalRooms) {
  return {
    type: types.INIT_ROOM_BOOKING,
    totalRooms
  };
}