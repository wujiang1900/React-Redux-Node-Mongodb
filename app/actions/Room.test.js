import * as actions from './Room'
import * as types from '../constants/ActionTypes'

import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import instance from '../config/axiosconfig';

describe('actions', () => {

    it('should create an action to handle room checkbox click event', () => {
        const i=2
        const expectedAction = {
            type: types.CLICK_ROOM,
            roomNo: i
          }
        expect(actions.clickRoom(i)).to.deep.equal(expectedAction)
    })
    
    describe('async actions', () => {
      const middlewares =  [thunk, promiseMiddleware()];
      const mockStore = configureMockStore(middlewares);
    
      beforeEach(() => {
        moxios.install(instance);
      });
      afterEach(() => {
        moxios.uninstall(instance);
      });

        xit('should handle initRooms()', () => {
            const payload = {
              data: [] 
            };
            moxios.wait(() => {
              const request = moxios.requests.mostRecent();
              request.respondWith({
                status: 200,
                response: payload,
              });
            });
            
            const expectedActions = [types.INIT_ROOM_BOOKING];
            // configure Mock store
            const store = mockStore({auth: {}});
            
            // call the async action creator
            return store.dispatch(actions.initRooms()).then(() => {
              
              const dispatchedActions = store.getActions();
              const actionTypes = dispatchedActions.map(action => action.type);
              
              expect(actionTypes).to.deep.equal(expectedActions);
                },
            );
      });
    });
});