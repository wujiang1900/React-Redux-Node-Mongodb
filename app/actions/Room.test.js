import * as actions from './Room'
import * as types from '../constants/ActionTypes'

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

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
        let props = {
            preferences: {
                activeWorkspaceId: 'w1',
                activeProjectId: 'p1'
            }
        }
        afterEach(() => {
            fetchMock.reset()
        })
        const middlewares = [ thunk ]
        const mockStore = configureMockStore(middlewares)
        it('should handle initRooms()', () => {
            const data = {}
            fetchMock.mock('/api/rooms', {status: 200, data})
            
            const expectedActions = [
                            {
                                type: types.INIT_ROOM_BOOKING,
                                data
                            }
                        ]
            const store = mockStore(props)
            return store.dispatch(actions.initRooms())
                .then(() => { // return of async actions
                    expect(store.getActions()).to.deep.equal(expectedActions)
                })
      })

    })
})