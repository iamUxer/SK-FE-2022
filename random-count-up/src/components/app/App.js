import './App.css';
import logoPath, { ReactComponent as ReactLogo } from 'assets/logo.svg';
import { getAsset } from 'utils';

// public/ static
// console.log(getAsset('favicon.ico'));

// src/ contenthash
// console.log(logoPath);

// SVGR
// React SVG Component
// console.log(ReactLogo);
// React SVG Element (JSX)
// console.log(<ReactLogo />);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo className="App-logo" title="React" />
        {/* <img src={logoPath} className="App-logo" alt="React" /> */}
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
