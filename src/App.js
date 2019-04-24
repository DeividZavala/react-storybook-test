import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import InboxScreen from './components/PureInboxScreen/PureInboxScreen';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <InboxScreen />
        </Provider>
    );
  }
}

export default App;
