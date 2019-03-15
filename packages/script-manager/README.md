# script-manager

> script manager

## Setup

```sh
git clone https://github.com/Jurgenet/script-manager.git && cd script-manager && yarn
```

## Build library

```sh
yarn build:rollup
```

## Publish library

```sh
# publish to public or private npm registry
npm login
npm publish
```

## Usage

```sh
# install to your project from public or private npm registry
yarn add @jurgenet/script-manager
```

```js
// import library in your react component
import ScriptManager from '@jurgenet/script-manager';

// use as simple react component
//
// somewhere in your JSX
<ScriptManager initProps={scriptManagerInitProps} onSubmit={handleScriptManagerSubmit} />;
```

## Example of use

```js
/**
 * @source: ReactApp.js or or somewhere else
 */
import React, { Component } from 'react';

import ScriptManager from '@jurgenet/script-manager';

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
        <div className="react-app__content">
          <div className="react-app__sidebar">
            <div className="react-app__info">
              <div className="react-app__info-title">Information:</div>
              <div className="react-app__info-data">{this.state.msg}</div>
            </div>
          </div>
          <div className="react-app__script-manager">
            <ScriptManager
              initProps={scriptManagerInitProps}
              onSubmit={handleScriptManagerSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
```

## License

_MIT_
