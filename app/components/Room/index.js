import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../../constants/constants.json'

class Room extends React.Component {

  render() {
    const {roomNo, room: {isSelected, hideCheckBox, guests}={}, clickRoom, selectGuest} = this.props;

    let headerClass = 'px-2 header';
    let bodyClass = 'bg-litegrey p-2';
    if(isSelected) {
      headerClass += '-selected';
      bodyClass = 'p-2'
    }
// console.log(roomNo, guests[0])
    return (
      <div className="mt-4 mr-2 rounded border">
        <div className={headerClass}>
          {!hideCheckBox && <input type="checkbox" className="mr-1" checked={isSelected} onChange={clickRoom} />}
          <span className="">Room {roomNo+1}</span>
        </div>
        <div className={bodyClass}>
          {this.renderLabels()}
          {this.renderDropDown(0, selectGuest, guests, isSelected)}
          <span className="mx-4">
          {this.renderDropDown(1, selectGuest, guests, isSelected)}
          </span>
        </div>
      </div>
    );
  }
  
  renderDropDown(type, selectGuest, guests, isSelected) {
    // debugger
    return (
      <select disabled={!isSelected} value={guests[type]} onChange={(e)=>selectGuest(e, type)}>
       {this.renderOptions(type)}
      </select>
      )
  }
  
  renderOptions(type) {
    let min, max;
    if(type===0) {
      min = Constants.minAdult;
      max = Constants.maxAdult;
    }
    else {
      min = Constants.minChild;
      max = Constants.maxChild;
    }
    let options=[];
    for(let i=min; i<=max; i++)
      options.push( <option value={i} key={i}>{i}</option>)
    return options;
  }
  
  renderLabels(){
    return (
      <div>
        <span className="mr-1">Adults</span><span className="mx-2">Children</span>
        <div />
        <span className="mr-2">(18+)</span><span className="mx-2">(0-17)</span>
      </div>
    )
  }
}

Room.propTypes = {
  roomNo: PropTypes.number.isRequired,
  room: PropTypes.object.isRequired,
  clickRoom: PropTypes.func.isRequired,
  selectGuest: PropTypes.func.isRequired
};

export default Room;