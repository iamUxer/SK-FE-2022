import './App.css';
import logo from '../assets/logo.svg';
import { getAsset } from '../utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React" />
        {/* <img src={getAsset('favicon.ico')} className="App-logo" alt="React" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 학습하기
        </a>
      </header>
    </div>
  );
}

export default App;
