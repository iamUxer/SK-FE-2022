import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Components --------------------------------------------------------------- */

import { ErrorBoundary } from '@/components';

/* Pages -------------------------------------------------------------------- */

import HomePage from '@/pages/Home';
import LearnClassPage from '@/pages/LearnClass';
import LearnHooksPage from '@/pages/LearnHooks';
import DomPage from '@/pages/Dom';

/* App ---------------------------------------------------------------------- */

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn-class" element={<LearnClassPage />} />
            <Route path="/learn-hooks" element={<LearnHooksPage />} />
            <Route path="/dom" element={<DomPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}
