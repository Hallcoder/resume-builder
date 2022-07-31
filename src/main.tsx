import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './pages/Home';
import Resume from './pages/Resume';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/makeResume' element={<Resume />} />
    </Routes>
    <App />
    </Router>
  </React.StrictMode>
)
