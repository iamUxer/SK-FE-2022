import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Pages -------------------------------------------------------------------- */

import HomePage from 'pages/Home';

/* App ---------------------------------------------------------------------- */

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
