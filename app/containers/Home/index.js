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
          <Room roomNo={i} 
          room={room} 
          clickRoom={(e)=>actions.clickRoom(i)} 
          selectGuest={(e, type)=>
                  actions.selectGuest({'roomNo': i, 'type': type, 'guestNo': e.target.value})
                }
          key={i} />
      ))
    return (
      <div className="container">
        <div className="row">
          {roomsDiv}
        </div>
        <input type="button" onClick={e=>actions.bookRooms({rooms})} value="Submit" />
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
