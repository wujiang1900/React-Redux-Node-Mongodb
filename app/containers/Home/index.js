import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as roomActions from '../../actions/HomePage';
import {Room} from '../../components';

class Home extends React.Component {
  
  componentDidMount() {
    this.props.actions.initRooms();
  }

  renderRooms(rooms, actions) {
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
      </div>
    )
  }
  
  render() {
    if(!this.props.rooms.length) 
      return null;
    const {rooms, roomsDbId, actions} = this.props;
    return (
      <div>
        {this.renderRooms(rooms, actions)}
        <input type="button" onClick={e=>actions.bookRooms(rooms, roomsDbId)} value="Submit" className="ml-5 mt-3 bg-litegrey" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
    return {
        rooms: state.bookRooms.rooms,
        roomsDbId: state.bookRooms.roomsDbId
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, roomActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
