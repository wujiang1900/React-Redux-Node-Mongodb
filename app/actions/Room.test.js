import * as actions from './Room'
import * as types from '../constants/ActionTypes'

describe('actions', () => {

    it('should create an action to handle room checkbox click event', () => {
        const i=2
        const expectedAction = {
            type: types.CLICK_ROOM,
            roomNo: i
          }
        expect(actions.clickRoom(i)).to.deep.equal(expectedAction)
    })
    
    
})