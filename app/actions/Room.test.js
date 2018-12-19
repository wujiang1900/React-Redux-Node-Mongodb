import * as actions from './Room'
import * as types from '../constants/ActionTypes'

import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';

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
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });

        it('should handle initRooms()', () => {
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
            
            const expectedActions = [types.INIT_ROOM_BOOKING+'_PENDING', types.INIT_ROOM_BOOKING+'_FULFILLED'];
            // configure Mock store
            const store = mockStore({});
            
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