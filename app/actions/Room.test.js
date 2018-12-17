import * as actions from '../room'
import * as types from '../../constants/ActionTypes'

describe('actions', () => {

    it('should create an action to handle room checkbox click event', () => {

        const i="3"
        const expectedAction = {
            type: types.CLICK_ROOM,
            i,
            }
        expect(actions.toggleAssertion(i)).toEqual(expectedAction)
    })
})