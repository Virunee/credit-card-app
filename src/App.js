import React, { Component } from 'react';
import './App.css';
import InputPage from './containers/InputPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Virunee's Credit Cards</h1>
        </header>
        <p className="App-intro">
          Enter your details below to find out which cards you can apply for.
        </p>
        <InputPage/>
      </div>
    );
  }
}

export default App;
