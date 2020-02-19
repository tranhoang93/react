import React, { Component } from 'react';
import Validation from './components/ValidationX/Validation';
import Char from './components/Char/Char';

import './App.css';

class App extends Component {
  state = {
    userInputs: ""
  }

  inputChangedHandler = event => {
    const inputValue = event.target.value;
    this.setState(state => ({
      userInputs: inputValue
    }));
  };

  removeClickedHandler = targetIndex => {
    const currentState = this.state.userInputs;
    const removedChar = currentState.slice(0, targetIndex) + currentState.slice(targetIndex + 1, currentState.length + 1);
    this.setState(state => ({
      userInputs: removedChar
    }));
  };

  render() {
    const changedStateData = this.state.userInputs.split('');

    const charList = changedStateData.map(
      (char, index) => {
        let charCh = char === ' ' ? '&#8192;' : char;
        return (<Char
          key={index}
          character={charCh}
          clicked={() => this.removeClickedHandler(index)}
        />);
      }
    )

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInputs}
        />
        <h3>{this.state.userInputs}</h3>
        <Validation inputLength={this.state.userInputs.length} />
        <div>{charList}</div>
      </div>
    );
  }
}

export default App;
