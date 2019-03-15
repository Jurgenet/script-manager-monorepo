import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import ScriptManager from 'script-manager';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'empty',
    };

    this.scriptManagerInitProps = {
      sender: 'React App',
    };

    this.handleScriptManagerSubmit = this.handleScriptManagerSubmit.bind(this);
  }

  handleScriptManagerSubmit({ msg }) {
    this.setState(state => ({ msg }));
  }

  render() {
    const { scriptManagerInitProps, handleScriptManagerSubmit } = this;

    return (
      <div className="react-app">
        <header className="react-app__header">
          <h1>React App</h1>
        </header>
        <div className="react-app__content">
          <div className="react-app__sidebar">
            <img src={logo} className="logo" alt="logo" />
            <div className="react-app__info">
              <div className="react-app__info-title">Information:</div>
              <div className="react-app__info-data">{this.state.msg}</div>
            </div>
          </div>
          <div className="react-app__script-manager">
            <ScriptManager initProps={scriptManagerInitProps} onSubmit={handleScriptManagerSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
