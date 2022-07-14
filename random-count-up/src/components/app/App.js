import './App.css';
import { Component } from 'react';
import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import { AppHeader, AppLink } from 'components';

class App extends Component {
  static defaultProps = {
    linkText: 'React 학습하기',
  };

  render() {
    return (
      <div className="App">
        <AppHeader>
          <ReactLogo className="App-logo" title="React" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink href="https://reactjs.org" external>
            {this.props.linkText}
          </AppLink>
        </AppHeader>
      </div>
    );
  }
}

export default App;
