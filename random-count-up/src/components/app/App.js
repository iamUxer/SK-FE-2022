import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from 'components';

import HomePage from 'pages/Home';
import ProductsPage from 'pages/Products';
import JsxInActionPage from 'pages/JsxInAction';

class App extends Component {
  render() {
    return (
      <div className="App">
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
