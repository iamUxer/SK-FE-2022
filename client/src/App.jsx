import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Pages -------------------------------------------------------------------- */

import HomePage from 'pages/Home';
import LearnClassPage from 'pages/LearnClass';

/* App ---------------------------------------------------------------------- */

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnClassPage />} />
        </Routes>
      </div>
    </Router>
  );
}
