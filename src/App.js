import React, { Component } from 'react';

import Game from './components/Game.js';
class App extends Component {
  render() {
    return (
      <div>

          THIS IS A STAR MATCH GAME. LET'S PLAY!!!
          <Game />
      </div>
    );
  }
}

export default App;
