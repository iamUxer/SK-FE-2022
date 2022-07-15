import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Pages -------------------------------------------------------------------- */

import HomePage from 'pages/Home';
import LearnClassPage from 'pages/LearnClass';
import LearnHooksPage from 'pages/LearnHooks';

/* App ---------------------------------------------------------------------- */

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-class" element={<LearnClassPage />} />
          <Route path="/learn-hooks" element={<LearnHooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}
