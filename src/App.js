import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from './redux'
import './styles/App.css'

const setup = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={setup.store}>
        <div>
          <h1>My React App!</h1>
        </div>
      </Provider>
    )
  }
}

export default App;
