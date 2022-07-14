import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from 'components';

import HomePage from 'pages/Home';
import ProductsPage from 'pages/Products';
import JsxInActionPage from 'pages/JsxInAction';
import { A11yHidden } from 'components';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* skip to content */}

        <A11yHidden
          as="button"
          style={{
            position: 'fixed',
            left: 30,
            top: 30,
            zIndex: 1000,
          }}
          focusable
        >
          초점 이동이 되면 화면에 표시됩니다.
        </A11yHidden>

        <Router>
          <AppHeader />
          <Routes>
            <Route
              path="/"
              element={<HomePage linkText={this.props.linkText} />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/jsx-in-action" element={<JsxInActionPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
