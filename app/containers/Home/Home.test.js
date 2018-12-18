import React from 'react'
import {mount, shallow} from 'enzyme'
import Home from './index'
import configureMockStore from 'redux-mock-store'

describe('testing home component', () => {

    let dom;

    let mockedStore;
    beforeEach( () => {
        mockedStore = configureMockStore()(
            {
              bookRooms: {
                rooms: [
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
                ],
                roomsDbId: '1232323'
              }
            }
        );

        dom = shallow(<Home store={mockedStore}/>)
    });

    it('generates a non null dom without crash', () => {
        expect(dom).to.not.equal(null);
    })
        
    it('renders rooms', () => {
        expect(dom.find('Room')).to.not.equal(null);
    })
    
    it('renders button', () => {
        expect(dom.find('input[type="button"]')).to.not.equal(null);
    })
})