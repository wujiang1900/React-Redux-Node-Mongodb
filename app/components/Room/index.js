import React from 'react';
import PropTypes from 'prop-types';

class Room extends React.Component {

  render() {
    const {roomNo, isSelected, hideCheckBox, clickRoom} = this.props;

    let headerClass = 'px-2 header';
    let bodyClass = 'bg-litegrey p-2';
    if(isSelected) {
      headerClass += '-selected';
      bodyClass = 'p-2'
    }
// console.log(roomNo, isSelected)
    return (
      <div className="mt-4 mr-2 rounded border">
        <div className={headerClass}>
          {!hideCheckBox && <input type="checkbox" className="mr-1" checked={isSelected} onClick={clickRoom} />}
          <span className="">Room {roomNo+1}</span>
        </div>
        <div className={bodyClass}>
          <span className="mr-1">Adults</span><span className="mx-2">Children</span>
          <div />
          <span className="mr-2">(18+)</span><span className="mx-2">(0-17)</span>
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  roomNo: PropTypes.number,
  isSelected: PropTypes.bool,
  hideCheckBox: PropTypes.bool,
  clickRoom: PropTypes.func
};

export default Room;