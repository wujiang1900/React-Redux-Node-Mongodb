import React from 'react';
import PropTypes from 'prop-types';

class Room extends React.Component {

  render() {
    return (
      <div>
        Test api: {this.props.roomNo + this.props.isChecked}
      </div>
    );
  }
}

Room.propTypes = {
  roomNo: PropTypes.number,
  isChecked: PropTypes.bool,
  hideCheckBox: PropTypes.bool
};

export default Room;