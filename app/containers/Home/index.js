import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as roomActions from '../../actions/HomePage';
import {Room} from '../../components';

class Home extends React.Component {
  
  componentDidMount() {
    this.props.actions.initRooms();
  }

  renderRooms() {
    // console.log(this.props.rooms)
    const {rooms, actions} = this.props;
    const roomsDiv = rooms.map((room, i)=>(
          <Room roomNo={i} isSelected={room.isSelected} hideCheckBox={room.hideCheckBox} clickRoom={(e)=>actions.clickRoom(i)} key={i} />
      ))
    return (
      <div className="container">
        <div className="row">
          {roomsDiv}
        </div>
      </div>
    )
  }
  
  render() {
    if(!this.props.rooms.length) 
      return null;
    return (
      <div className="home-page">
        {this.renderRooms()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
    return {
        rooms: state.bookRooms.rooms
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, roomActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
