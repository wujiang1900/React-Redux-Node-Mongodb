import reducer from './book-rooms'
import * as types from '../constants/ActionTypes'

describe('bookrooms reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).to.deep.equal(
            {
              roomsDbId: null,
              rooms: []
            }
        )
    })

    it('should handle INIT_ROOM_BOOKING when initally no rooms saved to DB yet', () => {
        expect(
            reducer({
               roomsDbId: null,
               rooms: []
            }, {
                type: types.INIT_ROOM_BOOKING+'_FULFILLED',
                payload: {data: {total: 4}}
            })
        ).to.deep.equal(
            {
                roomsDbId: undefined,
                rooms: [
                  {
                    "guests": [
                      1,
                      0
                    ],
                    "hideCheckBox": true,
                    "isSelected": true
                  },
                  {
                    "guests": [
                      1,
                      0
                    ],
                    "hideCheckBox": false,
                    "isSelected": false
                  },
                  {
                    "guests": [
                      1,
                      0
                    ],
                    "hideCheckBox": false,
                    "isSelected": false
                  },
                  {
                    "guests": [
                      1,
                      0
                    ],
                    "hideCheckBox": false,
                    "isSelected": false
                  }
                ]
            }
        )
    })
    
    it('should handle INIT_ROOM_BOOKING when previously booked rooms saved to DB', () => {
        const  rooms = [
                  {
                    "guests": [
                      1,
                      1
                    ],
                    "hideCheckBox": true,
                    "isSelected": true
                  },
                  {
                    "guests": [
                      2,
                      1
                    ],
                    "hideCheckBox": false,
                    "isSelected": true
                  },
                  {
                    "guests": [
                      1,
                      0
                    ],
                    "hideCheckBox": false,
                    "isSelected": false
                  },
                  {
                    "guests": [
                      1,
                      0
                    ],
                    "hideCheckBox": false,
                    "isSelected": false
                  }
                ];
        const dummyid = 'dummyid';
        expect(
            reducer({
               roomsDbId: null,
               rooms: []
            }, {
                type: types.INIT_ROOM_BOOKING+'_FULFILLED',
                payload: {data: 
                  {total: 4, 
                    _id: dummyid, 
                    rooms: rooms
                  }
                }
            })
        ).to.deep.equal(
            {
                roomsDbId: dummyid,
                rooms:rooms
            }
        )
    })
})