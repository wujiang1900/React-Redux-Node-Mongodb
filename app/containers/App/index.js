import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
require('isomorphic-fetch');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}
