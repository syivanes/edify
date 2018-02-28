import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import classnotesFolders from '../src/reducers/classnotesFolders';
import { Provider } from 'react-redux';
import ClassnotesFoldersContainer from '../src/containers/ClassnotesFoldersContainer';

const REDUX_DEV = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(classnotesFolders, REDUX_DEV);
  }

  render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <ClassnotesFoldersContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
