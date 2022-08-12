//@ts-nocheck
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home';
import Resume from './pages/Resume';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/makeResume' element={<Resume />} />
    </Routes>
    </PersistGate>
  </Provider>
    </Router>
  </React.StrictMode>
)
