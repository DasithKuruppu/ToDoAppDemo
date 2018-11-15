import React, { Component } from 'react';
//import './App.css';
import ToDos from './containers/todos';
class App extends Component {
  render() {
    return (
      <div className="App">
       <ToDos/>
      </div>
    );
  }
}

export default App;
