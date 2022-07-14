import './App.css';
import { Component } from 'react';
import { ReactComponent as ReactLogo } from 'assets/logo.svg';

// Stateless Component (functional component)
// do not use class component

// Stateful Component
// using class component
class App extends Component {
  static defaultProps = {
    linkText: 'React 학습하기',
  };

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactLogo className="App-logo" title="React" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.linkText}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
