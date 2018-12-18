import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Room from './index';

describe("Room component", () => {
  
  const dummyFunc= ()=>{}
  beforeEach(function () {
    this.component = TestUtils.renderIntoDocument(<Room roomNo={1} clickRoom={dummyFunc} selectGuest={dummyFunc} room={{guests:[1,0]}} />);
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it('renders without crashing', function () {
  });
});