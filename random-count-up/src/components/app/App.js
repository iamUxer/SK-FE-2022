import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from 'components';

import HomePage from 'pages/Home';
import ProductsPage from 'pages/Products';
import JsxInActionPage from 'pages/JsxInAction';

class App extends Component {
  static defaultProps = {
    linkText: 'React 학습하기',
  };

  render() {
    return (
      <div className="App">
        <AppHeader>
          <h1>App Header</h1>
        </AppHeader>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage linkText={this.props.linkText} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/jsx-in-action" element={<JsxInActionPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
