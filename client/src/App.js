import React, { Component } from 'react';
import './App.css';

import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Choose Your Own Supernatural Adventure!
        </header>
        <MainMenu/>
      </div>
    );
  }
}

export default App;
