import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import TaskList from './components/TaskList/TaskList';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <TaskList />
        </Provider>
    );
  }
}

export default App;
