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
    const {rooms} = this.props;
    return (<div>{rooms.length}</div>)
  }
  
  render() {
    
    return (
      <div className="home-page">
        Home Page
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
